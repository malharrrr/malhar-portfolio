import { PASSWORD, ASCII, SOCIAL, ABOUT, PROJECTS, SKILLS, EXPERIENCE, ACHIEVEMENTS, RESUME_URL } from './data.js';

function span(text: string, cls: string): string {
  return `<span class="${cls}">${text}</span>`;
}
function hang(text: string, indent: number): string {
  return `<div style="padding-left: ${indent}ch; text-indent: -${indent}ch;">${text}</div>`;
}

export class Terminal {
  private output: HTMLElement;
  private input: HTMLInputElement;
  private history: string[] = [];
  private histIdx: number = -1;
  private isProcessing: boolean = false;
  private COMMANDS: Record<string, () => void>;

  constructor(outputEl: HTMLElement, inputEl: HTMLInputElement) {
    this.output = outputEl;
    this.input = inputEl;
    this.COMMANDS = {
      help:         () => this.printHelp(),
      about:        () => this.printAbout(),
      projects:     () => this.printProjects(),
      skills:       () => this.printSkills(),
      experience:   () => this.printExperience(),
      achievements: () => this.printAchievements(),
      socials:      () => this.printSocials(),
      resume:       () => this.openResume(),
      whoami:       () => this.printWhoami(),
      clear:        () => this.clear(),
      agent:        () => this.runAgentEasterEgg(),
      analyze:      () => this.runAgentEasterEgg(),
    };
    this.bindKeys();
    this.init();
  }

  private bindKeys(): void {
    this.input.addEventListener('keydown', (e: KeyboardEvent) => {
      if (this.isProcessing) {
        e.preventDefault();
        return;
      }

      if (e.key === 'Enter') {
        const val = this.input.value.trim();
        this.input.value = '';
        this.execute(val);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (this.histIdx < this.history.length - 1) this.histIdx++;
        this.input.value = this.history[this.histIdx] ?? '';
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (this.histIdx > 0) this.histIdx--;
        else { this.histIdx = -1; this.input.value = ''; return; }
        this.input.value = this.history[this.histIdx] ?? '';
      } else if (e.key === 'Escape') {
        this.input.value = '';
      } else if (e.key === 'Tab') {
        e.preventDefault();
        const val = this.input.value.trim().toLowerCase();
        if (!val) return;
        
        const cmds = Object.keys(this.COMMANDS);
        const matches = cmds.filter(c => c.startsWith(val));

        if (matches.length === 1) {
          this.input.value = matches[0];
        } else if (matches.length > 1) {
          this.printCmd(val);
          this.print(`  ${span(matches.join('   '), 'c-green')}\n`);
        }
      }
    });
    
    document.getElementById('terminal-screen')!.addEventListener('click', () => {
      const selection = window.getSelection();
      if (!selection || selection.toString().length === 0) {
        this.input.focus();
      }
    });
  }

  private init(): void {
    this.printBanner();
    this.printHelp();
    this.input.focus();
  }

  private print(html: string): void {
    const div = document.createElement('div');
    div.innerHTML = html;
    this.output.appendChild(div);
    this.output.scrollTop = this.output.scrollHeight;
  }

  private printCmd(text: string): void {
    this.print(`${span('guest@malhar.dev:~$', 'c-dim')} ${span(text, 'c-white')}`);
  }

  private execute(raw: string): void {
    if (!raw) return;
    this.history.unshift(raw);
    this.histIdx = -1;
    this.printCmd(raw);
    const cmd = raw.toLowerCase();
    if (this.COMMANDS[cmd]) {
      this.COMMANDS[cmd]();
    } else {
      this.print(`\n${span('command not found:', 'c-red')} ${raw} — type ${span('help', 'c-yellow')} for available commands\n`);
    }
  }

  private clear(): void { this.output.innerHTML = ''; }

  private printBanner(): void {
    this.print(`<pre class="ascii-art" style="font-size:10px;margin:8px 0">${ASCII}</pre>`);
    this.print(`${span('  Malhar Sarang Bonde', 'c-cyan')} — Software Engineer & AI Builder`);
    this.print(`  ${span('Type ', 'c-dim')}${span('help', 'c-yellow')}${span(' to see available commands.', 'c-dim')}\n`);
  }

  private printHelp(): void {
    const cmds: [string, string][] = [
      ['about',        'who am I'],
      ['projects',     'things I have built'],
      ['skills',       'my tech stack'],
      ['experience',   'work history'],
      ['achievements', 'hackathons and publications'],
      ['socials',      'find me online'],
      ['resume',       'open resume.pdf'],
      ['clear',        'clear the terminal'],
      ['whoami',       'quick intro'],
      ['agent',        'run the hiddent agent'],
      ['analyze',      'analyze malhars work'],
      ['help',         'show this menu']
    ];
    this.print(`\n${span('available commands:', 'c-yellow')}\n`);
    cmds.forEach(([cmd, desc]) => {
      this.print(`  ${span(cmd.padEnd(14), 'c-green')}${span('— ' + desc, 'c-dim')}`);
    });
    this.print('');
  }

  private printAbout(): void {
    this.print(`\n${span('// about', 'c-yellow')}\n`);
    ABOUT.split('\n').forEach(line => this.print(`  ${line}`));
    this.print('');
  }

  private printProjects(): void {
    this.print(`\n${span('// projects', 'c-yellow')}\n`);
    PROJECTS.forEach((p, i) => {
      const num = String(i + 1).padStart(2, '0');
      this.print(`  ${span('[' + num + ']', 'c-cyan')} ${span(p.name, 'c-green')}`);
      this.print(hang(`       ${span(p.tech, 'c-yellow')}`, 7));
      this.print(hang(`       ${span(p.description, 'c-white')}`, 7));
      this.print(hang(`       <a href="${p.link}" target="_blank">${p.link}</a>`, 7));
      this.print('');
    });
  }

  private printSkills(): void {
    this.print(`\n${span('// skills', 'c-yellow')}\n`);
    SKILLS.forEach(s => {
      this.print(hang(`  ${span(s.category.padEnd(12), 'c-cyan')} ${span(s.items, 'c-white')}`, 15));
    });
    this.print('');
  }

  private printExperience(): void {
    this.print(`\n${span('// experience', 'c-yellow')}\n`);
    EXPERIENCE.forEach(e => {
      this.print(`  ${span(e.role, 'c-green')} ${span('@', 'c-dim')} ${span(e.company, 'c-cyan')}`);
      this.print(`  ${span(e.period, 'c-dim')}\n`);
      e.bullets.forEach(b => this.print(hang(`  ${span('›', 'c-dim')} ${span(b, 'c-white')}`, 4)));
      this.print('');
    });
  }

  private printAchievements(): void {
    this.print(`\n${span('// achievements', 'c-yellow')}\n`);
    ACHIEVEMENTS.forEach(a => {
      this.print(hang(`  ${span('★', 'c-magenta')} ${span(a, 'c-white')}`, 4));
    });
    this.print('');
  }

  private printSocials(): void {
    this.print(`\n${span('// socials', 'c-yellow')}\n`);
    this.print(hang(`  ${span('github'.padEnd(10), 'c-cyan')} <a href="https://github.com/${SOCIAL.github}" target="_blank">github.com/${SOCIAL.github}</a>`, 13));
    this.print(hang(`  ${span('linkedin'.padEnd(10), 'c-cyan')} <a href="https://linkedin.com/in/${SOCIAL.linkedin}" target="_blank">linkedin.com/in/${SOCIAL.linkedin}</a>`, 13));
    this.print(hang(`  ${span('email'.padEnd(10), 'c-cyan')} <a href="mailto:${SOCIAL.email}">${SOCIAL.email}</a>`, 13));
    this.print('');
  }

  private printWhoami(): void {
    this.print(`\n${span('malhar bonde', 'c-cyan')} — ai engineer, builder, published researcher, 3x hackathon winner\n`);
  }

  private openResume(): void {
    this.print(`\n${span('opening resume...', 'c-green')}\n`);
    setTimeout(() => window.open(RESUME_URL, '_blank'), 400);
  }

  private async runAgentEasterEgg(): Promise<void> {
    this.isProcessing = true;
    this.input.disabled = true;

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const logs = [
      span('[Agent] Initializing independent tool-calling engine...', 'c-dim'),
      span('[Agent] Mounting Docker containers... Done.', 'c-dim'),
      span('[Agent] Scanning repository for full-stack capabilities...', 'c-dim'),
      span('[Agent] Analyzing TCARP reinforcement learning metrics...', 'c-dim'),
      span('[Agent] Validating hackathon wins... Confirmed.', 'c-dim')
    ];

    this.print('');
    for (const log of logs) {
      await sleep(500 + Math.random() * 500);
      this.print(`  ${log}`);
    }

    await sleep(800);
    this.print(`\n  ${span('[Agent Result] Analysis complete. Candidate Malhar Bonde exceeds parameters. Recommendation: IMMEDIATE HIRE.', 'c-green')}\n`);

    await sleep(500);
    this.print(`  ${span('[System] Releasing resources... returning control to guest.', 'c-dim')}\n`);

    this.isProcessing = false;
    this.input.disabled = false;
    this.input.focus();
  }
}
