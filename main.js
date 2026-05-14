// Initialize Vercel Web Analytics
import { inject } from '@vercel/analytics';

inject({
  mode: 'auto',
  debug: false
});

const ASCII = `
 ███╗   ███╗ █████╗ ██╗     ██╗  ██╗ █████╗ ██████╗
 ████╗ ████║██╔══██╗██║     ██║  ██║██╔══██╗██╔══██╗
 ██╔████╔██║███████║██║     ███████║███████║██████╔╝
 ██║╚██╔╝██║██╔══██║██║     ██╔══██║██╔══██║██╔══██╗
 ██║ ╚═╝ ██║██║  ██║███████╗██║  ██║██║  ██║██║  ██║
 ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝`;

const SOCIAL = {
  email: 'malharbonde12@gmail.com',
  github: 'malharrrr',
  linkedin: 'malhar-bonde',
};

const RESUME_URL = 'https://malhar-portfolio-neon.vercel.app/resume.pdf';

const ABOUT = `Name      Malhar Sarang Bonde
Role      Software Engineer — Agentic AI & Full-Stack
Location  Mumbai, India (open to relocation)
Education B.Tech CSE (IoT, Cybersecurity & Blockchain), DJSCE Mumbai
Status    Immediate joiner, open to full-time roles

I build production-grade AI systems, LLM applications, and full-stack
products. Published researcher at ICAIC 2025 with 3 hackathon wins and
20+ national-level shortlists.`;

const PROJECTS = [
  {
    name: 'Wanderly',
    tech: 'Next.js, MongoDB Atlas, NextAuth.js, Claude/Gemini API',
    description: 'Full-stack AI trip planner with intelligent itinerary generation through multi-turn conversations. Persistent trip history, NextAuth authentication, and travel-journal UI.',
    link: 'https://wanderly-weld.vercel.app/',
  },
  {
    name: 'OmniHub',
    tech: 'TypeScript, JSON, Local Embeddings, MCP Server',
    description: 'A terminal-native memory hub and second brain designed for AI assistants (Claude/Gemini). CLI for seamless data entry and semantic search via local embeddings, zero database overhead. 300+ npm downloads.',
    link: 'https://www.npmjs.com/package/omnihub-cli',
  },
  {
    name: 'Healosbench',
    tech: 'Python, Anthropic API, Hono, Zod, Drizzle ORM',
    description: 'Full eval harness for structured clinical extraction using Anthropic tool use, retry-with-feedback loops, and prompt caching across 50 clinical transcripts and 3 prompt strategies. Per-field metrics (fuzzy match, set-based F1, numeric tolerance) with hallucination detection. Schema failure rate under 2%.',
    link: 'https://github.com/malharrrr/test-eval',
  },
  {
    name: 'AI/ML Image Processing API',
    tech: 'FastAPI, Docker Compose, Ollama, HuggingFace, RMBG-2.0',
    description: 'GPU-accelerated containerized pipeline integrating RMBG-2.0 for background removal and Moondream VLM for automated image captioning. 60% reduction in end-to-end processing time via multi-container orchestration.',
    link: 'https://github.com/malharrrr/image-processing',
  },
  {
    name: 'TCARP',
    tech: 'Python, TensorFlow, PyTorch, Reinforcement Learning',
    description: 'Published at ICAIC 2025 (MIT Jaipur). Causal RL trading system using Granger Causality, DAGs, GNNs and PPO. 2.45 Sharpe ratio — 40% above all baselines, 2x higher risk-adjusted returns than MVO during high-volatility regimes.',
    link: 'https://github.com/malharrrr/TCARP',
  },
  {
    name: 'De-Samaadhan',
    tech: 'Node.js, Next.js, Solidity, Blockchain',
    description: 'Won Best Blockchain Project at CSI-SPIT 2024. Decentralized complaint management with Aadhaar Anon integration for anonymous trustless authentication.',
    link: 'https://github.com/malharrrr/De-Samaadhan',
  },
  {
    name: 'Mirage.AI',
    tech: 'TensorFlow, PyTorch, Flask, MTCNN, VGG-16',
    description: 'Won 2nd Runner Up at Aeravat AI Hackathon (IEEE Bombay Section). Real-time deepfake detection using MTCNN and VGG-16 for GAN artifact classification.',
    link: 'https://github.com/mkdirteamname/Aeravat',
  },
  {
    name: 'Legual',
    tech: 'Django, MBart, Google Flan T5, LangChain, OpenAI',
    description: 'Legal document processing platform with AI-powered translation, summarization, and Chat with PDF using instructor embeddings and vector search.',
    link: 'https://github.com/malharrrr/Legual-datahack',
  },
];

const SKILLS = [
  {
    category: 'AI/ML',
    items: 'LLMs (Claude, Gemini, OpenAI), LangChain, LangGraph, MCP, Agentic Workflows, RAG, Vector Embeddings, KV Caching, Prompt Engineering, Model Evaluation, TensorFlow, PyTorch',
  },
  {
    category: 'Lang/Backend',
    items: 'Python, JavaScript, TypeScript, Solidity, Bash | Node.js, FastAPI, Flask, Django, WebSockets',
  },
  {
    category: 'Data/DevOps',
    items: 'MongoDB, PostgreSQL, Firebase, Vector DBs (Pinecone, Weaviate, pgvector) | Docker, Linux, Git, Redis, CI/CD',
  },
  {
    category: 'Frontend/Sys',
    items: 'React.js, Next.js, Tailwind CSS | Blockchain, System Design',
  },
];

const EXPERIENCE = [
  {
    role: 'Trainee Software Engineer',
    company: 'Neebal Technologies',
    period: 'Jun 2025 – Dec 2025 | Mumbai',
    bullets: [
      'Architected a stateful multi-agent system using LangGraph to automate complex business decision-making, reducing manual processing time by 40% and enhancing decision accuracy through Agentic RAG pipelines',
      `Built a curriculum-aware RAG pipeline for an EdTech Q&A module (Agneez); implemented grade-level metadata filtering in Pinecone DB to ensure responses were pedagogically appropriate per student level (e.g. restricting quadratic solutions to factor method for Grade 6), reducing response time to under 2s`,
      `Developed an Edge-AI Farmer's Assistant application; integrated a custom-trained ML model for real-time crop disease identification achieving 96% model accuracy across 20+ disease categories, providing low-latency weather and mandi updates on edge devices`,
      'Automated visa monitoring workflows by deploying a notification bot, reducing user check-frequency by 90% and improving successful slot acquisition rates through automated polling and real-time alerts',
    ],
  },
];

const ACHIEVEMENTS = [
  'Best Blockchain Project — CSI-SPIT Hackathon 2024',
  '2nd Runner Up — Aeravat AI Hackathon, IEEE Bombay Section',
  '20+ national-level hackathon shortlists (top 5% of 500+ participants)',
  'Published at ICAIC 2025 (MIT Jaipur) — causal reinforcement learning for algorithmic trading',
];

const span = (text, cls) => `<span class="${cls}">${text}</span>`;

class Terminal {
  constructor(outputEl, inputEl) {
    this.output = outputEl;
    this.input = inputEl;
    this.history = [];
    this.histIdx = -1;
    this.isProcessing = false;

    this.COMMANDS = {
      help:         () => this.printHelp(),
      about:        () => this.printAbout(),
      projects:     () => this.printProjects(),
      skills:       () => this.printSkills(),
      experience:   () => this.printExperience(),
      achievements: () => this.printAchievements(),
      socials:      () => this.printSocials(),
      whoami:       () => this.printWhoami(),
      resume:       () => this.openResume(),
      clear:        () => this.clear(),
      agent:        () => this.runAgentEasterEgg(),
    };

    this.bindKeys();
    this.printBanner();
    this.printHelp();
  }

  bindKeys() {
    this.input.addEventListener('keydown', (e) => {
      if (this.isProcessing) { e.preventDefault(); return; }

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
      } else if (e.key === 'Tab') {
        e.preventDefault();
        const val = this.input.value.trim().toLowerCase();
        if (!val) return;
        const cmds = Object.keys(this.COMMANDS);
        const matches = cmds.filter(c => c.startsWith(val));

        if (matches.length === 1) {
          this.input.value = matches[0];
        } else if (matches.length > 1) {
          this.print('');
          this.printCmd(val);
          this.print(`  ${span(matches.join('   '), 'c-green')}`);
          this.print('');
        }
      }
    });

    document.getElementById('terminal-screen').addEventListener('click', () => {
      const selection = window.getSelection();
      if (!selection || selection.toString().length === 0) this.input.focus();
    });
  }

  print(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    this.output.appendChild(div);
    this.output.scrollTop = this.output.scrollHeight;
  }

  printCmd(text) {
    this.print(`${span('guest@malhar.dev:~$', 'c-dim')} ${span(text, 'c-white')}`);
  }

  execute(raw) {
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

  clear() { this.output.innerHTML = ''; }

  printBanner() {
    this.print(`<pre class="ascii-art">${ASCII}</pre>`);
    this.print(`${span('  Malhar Sarang Bonde', 'c-cyan')} — Software Engineer & AI Builder`);
    this.print(`  ${span('Type ', 'c-dim')}${span('help', 'c-yellow')}${span(' or click the chips below to navigate.', 'c-dim')}\n`);
  }

  printHelp() {
    const cmds = [
      ['about',        'who am I'],
      ['projects',     'things I have built'],
      ['skills',       'my tech stack'],
      ['experience',   'work history'],
      ['achievements', 'hackathons and publications'],
      ['socials',      'find me online'],
      ['whoami',       'one-line identity'],
      ['resume',       'open resume PDF'],
      ['clear',        'clear the terminal'],
      ['agent',        '???'],
    ];
    this.print(`\n${span('available commands:', 'c-yellow')}\n`);
    cmds.forEach(([cmd, desc]) => {
      this.print(`  ${span(cmd.padEnd(14), 'c-green')}${span('— ' + desc, 'c-dim')}`);
    });
    this.print('');
  }

  printAbout() {
    this.print(`\n${span('// about', 'c-yellow')}\n`);
    ABOUT.split('\n').forEach(line => this.print(`  ${line}`));
    this.print('');
  }

  printProjects() {
    this.print(`\n${span('// projects', 'c-yellow')}\n`);
    PROJECTS.forEach((p, i) => {
      const num = String(i + 1).padStart(2, '0');
      this.print(`  ${span('[' + num + ']', 'c-cyan')} ${span(p.name, 'c-green')}`);
      this.print(`<div class="indent-7">       ${span(p.tech, 'c-yellow')}</div>`);
      this.print(`<div class="indent-7">       ${span(p.description, 'c-white')}</div>`);
      this.print(`<div class="indent-7">       <a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.link}</a></div>`);
      this.print('');
    });
  }

  printSkills() {
    this.print(`\n${span('// skills', 'c-yellow')}\n`);
    SKILLS.forEach(s => {
      this.print(`<div class="indent-15">  ${span(s.category.padEnd(12), 'c-cyan')} ${span(s.items, 'c-white')}</div>`);
    });
    this.print('');
  }

  printExperience() {
    this.print(`\n${span('// experience', 'c-yellow')}\n`);
    EXPERIENCE.forEach(e => {
      this.print(`  ${span(e.role, 'c-green')} ${span('@', 'c-dim')} ${span(e.company, 'c-cyan')}`);
      this.print(`  ${span(e.period, 'c-dim')}\n`);
      e.bullets.forEach(b => this.print(`<div class="indent-4">  ${span('›', 'c-dim')} ${span(b, 'c-white')}</div>`));
      this.print('');
    });
  }

  printAchievements() {
    this.print(`\n${span('// achievements', 'c-yellow')}\n`);
    ACHIEVEMENTS.forEach(a => {
      this.print(`<div class="indent-4">  ${span('★', 'c-magenta')} ${span(a, 'c-white')}</div>`);
    });
    this.print('');
  }

  printSocials() {
    this.print(`\n${span('// socials', 'c-yellow')}\n`);
    this.print(`<div class="indent-13">  ${span('github'.padEnd(10), 'c-cyan')} <a href="https://github.com/${SOCIAL.github}" target="_blank" rel="noopener noreferrer">github.com/${SOCIAL.github}</a></div>`);
    this.print(`<div class="indent-13">  ${span('linkedin'.padEnd(10), 'c-cyan')} <a href="https://linkedin.com/in/${SOCIAL.linkedin}" target="_blank" rel="noopener noreferrer">linkedin.com/in/${SOCIAL.linkedin}</a></div>`);
    this.print(`<div class="indent-13">  ${span('email'.padEnd(10), 'c-cyan')} <a href="mailto:${SOCIAL.email}">${SOCIAL.email}</a></div>`);
    this.print('');
  }

  printWhoami() {
    this.print(`\n  ${span('malhar bonde', 'c-cyan')} — ai engineer, builder, published researcher, 3x hackathon winner\n`);
  }

  openResume() {
    this.print(`\n${span('opening resume...', 'c-green')}\n`);
    const w = window.open(RESUME_URL, '_blank');
    if (!w) {
      this.print(`${span('blocked by browser. visit directly:', 'c-red')} <a href="${RESUME_URL}" target="_blank" rel="noopener noreferrer">${RESUME_URL}</a>\n`);
    }
  }

  async runAgentEasterEgg() {
    this.isProcessing = true;
    this.input.disabled = true;

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const logs = [
      span('[Agent] Initializing independent tool-calling engine...', 'c-dim'),
      span('[Agent] Mounting Docker containers... Done.', 'c-dim'),
      span('[Agent] Scanning repository for full-stack capabilities...', 'c-dim'),
      span('[Agent] Analyzing TCARP reinforcement learning metrics...', 'c-dim'),
      span('[Agent] Validating hackathon wins... Confirmed.', 'c-dim'),
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

document.addEventListener('DOMContentLoaded', () => {
  const outputEl = document.getElementById('output');
  const inputEl = document.getElementById('cmd-input');

  const terminal = new Terminal(outputEl, inputEl);

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      terminal.execute(cmd);
      inputEl.focus();
    });
  });
});