import { escapeHTML, text, link, displayUrl } from './html.js';

const ASCII = `
 ███╗   ███╗ █████╗ ██╗     ██╗  ██╗ █████╗ ██████╗
 ████╗ ████║██╔══██╗██║     ██║  ██║██╔══██╗██╔══██╗
 ██╔████╔██║███████║██║     ███████║███████║██████╔╝
 ██║╚██╔╝██║██╔══██║██║     ██╔══██║██╔══██║██╔══██╗
 ██║ ╚═╝ ██║██║  ██║███████╗██║  ██║██║  ██║██║  ██║
 ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝`;

export const PROMPT = 'guest@malhar.dev:~$';

const hang = (prefix, prefixCls, body) => {
  const head = prefixCls ? text(prefix, prefixCls) : escapeHTML(prefix);
  return `<div class="hang" style="--hang:${prefix.length}ch">${head}${body}</div>`;
};

const heading = (title) => `\n${text(`// ${title}`, 'c-yellow')}\n`;
const widest = (strings) => Math.max(...strings.map((s) => s.length));

export const banner = (profile) => [
  `<pre class="ascii-art">${ASCII}</pre>`,
  `${text(`  ${profile.name}`, 'c-cyan')} — ${escapeHTML(profile.tagline)}`,
  `  ${text('Type ', 'c-dim')}${text('help', 'c-yellow')}${text(' or click the chips below to navigate.', 'c-dim')}\n`,
];

export const echo = (input) => `${text(PROMPT, 'c-dim')} ${text(input, 'c-white')}`;

export const notFound = (input) =>
  `\n${text('command not found:', 'c-red')} ${escapeHTML(input)} — type ${text('help', 'c-yellow')} for available commands\n`;

export const completions = (partial, matches) => ['', echo(partial), `  ${text(matches.join('   '), 'c-green')}`, ''];

export const help = (commands) => {
  const width = widest(commands.map((c) => c.name)) + 2;
  return [
    `\n${text('available commands:', 'c-yellow')}\n`,
    ...commands.map((c) => `  ${text(c.name.padEnd(width), 'c-green')}${text(`— ${c.description}`, 'c-dim')}`),
    '',
  ];
};

export const about = (profile) => {
  const fields = [
    ['Name', profile.name],
    ['Role', profile.role],
    ['Location', profile.location],
    ['Education', profile.education],
    ['Status', profile.status],
  ];
  const width = widest(fields.map(([label]) => label)) + 1;
  return [
    heading('about'),
    ...fields.map(([label, value]) => hang(`  ${label.padEnd(width)}`, null, escapeHTML(value))),
    '  ',
    hang('  ', null, escapeHTML(profile.summary)),
    '',
  ];
};

export const projects = (projects) => [
  heading('projects'),
  ...projects.flatMap((p, i) => {
    const num = `[${String(i + 1).padStart(2, '0')}]`;
    const pad = ' '.repeat(`  ${num} `.length);
    return [
      `  ${text(num, 'c-cyan')} ${text(p.name, 'c-green')}`,
      hang(pad, null, text(p.tech, 'c-yellow')),
      hang(pad, null, text(p.description, 'c-white')),
      hang(pad, null, link(p.link)),
      '',
    ];
  }),
];

export const skills = (skills) => {
  const width = widest(skills.map((s) => s.label));
  return [
    heading('skills'),
    ...skills.map((s) => hang(`  ${s.label.padEnd(width)} `, 'c-cyan', text(s.items, 'c-white'))),
    '',
  ];
};

export const experience = (experience) => [
  heading('experience'),
  ...experience.flatMap((e) => [
    `  ${text(e.role, 'c-green')} ${text('@', 'c-dim')} ${e.link ? link(e.link, e.company) : text(e.company, 'c-cyan')}`,
    `  ${text([e.period, e.location].filter(Boolean).join(' | '), 'c-dim')}`,
    '',
    ...e.bullets.map((b) => hang('  › ', 'c-dim', text(b, 'c-white'))),
    '',
  ]),
];

export const achievements = (achievements) => [
  heading('achievements'),
  ...achievements.map((a) => hang('  ★ ', 'c-magenta', text(a, 'c-white'))),
  '',
];

export const socials = (socials) => {
  const width = widest(socials.map((s) => s.name)) + 2;
  return [
    heading('socials'),
    ...socials.map((s) => hang(`  ${s.name.padEnd(width)} `, 'c-cyan', link(s.url, displayUrl(s.url)))),
    '',
  ];
};

export const whoami = (profile) =>
  [`\n  ${text(profile.shortName.toLowerCase(), 'c-cyan')} — ${escapeHTML(profile.whoami)}\n`];

export const resumeOpening = () => [`\n${text('opening resume...', 'c-green')}\n`];

export const resumeBlocked = (url) =>
  [`${text('blocked by browser. visit directly:', 'c-red')} ${link(url)}\n`];

export const agentLog = (line) => `  ${text(line, 'c-dim')}`;
export const agentResult = (line) => `\n  ${text(line, 'c-green')}\n`;
