import * as content from './content.js';
import * as view from './terminal-view.js';

const AGENT_LOG = [
  '[Agent] Initializing independent tool-calling engine...',
  '[Agent] Mounting Docker containers... Done.',
  '[Agent] Scanning repository for full-stack capabilities...',
  '[Agent] Analyzing TCARP reinforcement learning metrics...',
  '[Agent] Validating hackathon wins... Confirmed.',
];

export const commands = [
  {
    name: 'help',
    description: 'list available commands',
    chip: false,
    run: ({ print, commands }) => print(view.help(commands)),
  },
  { name: 'about', description: 'who am I', run: ({ print }) => print(view.about(content.profile)) },
  {
    name: 'projects',
    description: 'things I have built',
    // Long output: keep the top of the section in view rather than the end.
    run: ({ print }) => print(view.projects(content.projects), { scroll: 'start' }),
  },
  { name: 'skills', description: 'my tech stack', run: ({ print }) => print(view.skills(content.skills)) },
  { name: 'experience', description: 'work history', run: ({ print }) => print(view.experience(content.experience)) },
  {
    name: 'achievements',
    description: 'hackathons and publications',
    run: ({ print }) => print(view.achievements(content.achievements)),
  },
  { name: 'socials', description: 'find me online', run: ({ print }) => print(view.socials(content.socials)) },
  { name: 'whoami', description: 'one-line identity', run: ({ print }) => print(view.whoami(content.profile)) },
  {
    name: 'resume',
    description: 'open resume PDF',
    run: ({ print, openUrl }) => {
      print(view.resumeOpening());
      if (!openUrl(content.resumeUrl)) print(view.resumeBlocked(content.resumeUrl));
    },
  },
  { name: 'clear', description: 'clear the terminal', run: ({ clear }) => clear() },
  {
    name: 'agent',
    description: '???',
    chip: false,
    async run({ print, sleep }) {
      print('');
      for (const line of AGENT_LOG) {
        await sleep(500 + Math.random() * 500);
        print(view.agentLog(line));
      }
      await sleep(800);
      print(view.agentResult('[Agent Result] Analysis complete. Candidate Malhar Bonde exceeds parameters. Recommendation: IMMEDIATE HIRE.'));
      await sleep(500);
      print(`${view.agentLog('[System] Releasing resources... returning control to guest.')}\n`);
    },
  },
];
