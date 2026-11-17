import { escapeHTML, text, link, displayUrl } from './html.js';

const ASCII = `
 ███╗   ███╗ █████╗ ██╗     ██╗  ██╗ █████╗ ██████╗
 ████╗ ████║██╔══██╗██║     ██║  ██║██╔══██╗██╔══██╗
 ██╔████╔██║███████║██║     ███████║███████║██████╔╝
 ██║╚██╔╝██║██╔══██║██║     ██╔══██║██╔══██║██╔══██╗
 ██║ ╚═╝ ██║██║  ██║███████╗██║  ██║██║  ██║██║  ██║
 ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝`;

export const PROMPT = 'guest@malhar.dev:~$';

const hang = (prefix, prefixCls, body, className = '') => {
  const head = prefixCls ? text(prefix, prefixCls) : escapeHTML(prefix);
  return `<div class="hang ${className}" style="--hang:${prefix.length}ch"><span class="hang-prefix${prefix.trim() ? '' : ' hang-indent'}">${head}</span>${body}</div>`;
};

const heading = (title) => `\n${text(`// ${title}`, 'c-yellow')}\n`;
const widest = (strings) => Math.max(...strings.map((s) => s.length));

// The first screen: who this is, before any command has been run.
export const banner = (profile, socials = []) => [
  `<pre class="ascii-art">${ASCII}</pre>`,
  hang('  ', null, `${text(profile.name, 'c-green')} ${text('—', 'c-dim')} ${escapeHTML(profile.tagline)}`),
  hang('  ', null, text(profile.location, 'c-dim')),
  '',
  hang('  ', null, escapeHTML(profile.summary)),
  '',
  hang('  ', null, socials.map((s) => link(s.url, s.name)).join(text('  ·  ', 'c-dim'))),
  '',
  hang('  ', null, `${text('Pick a section below, or type ', 'c-dim')}${text('help', 'c-green')}${text(' for every command.', 'c-dim')}`),
  '',
];

export const echo = (input) => `${text(PROMPT, 'c-dim')} ${text(input, 'c-white')}`;

export const notFound = (input, suggestion) =>
  `\n${text('command not found:', 'c-red')} ${escapeHTML(input)} — ${suggestion
    ? `did you mean ${text(suggestion, 'c-green')}?`
    : `type ${text('help', 'c-green')} for available commands`}\n`;

export const completions = (partial, matches) => ['', echo(partial), `  ${text(matches.join('   '), 'c-green')}`, ''];

export const help = (allCommands) => {
  const commands = allCommands.filter((c) => !c.hidden);
  const width = widest(commands.map((c) => c.name)) + 2;
  return [
    `\n${text('available commands:', 'c-yellow')}\n`,
    ...commands.map((c) => `<div class="help-row">  ${text(c.name.padEnd(width), 'c-green')}${text(`— ${c.description}`, 'c-dim')}</div>`),
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
    ...fields.map(([label, value]) => hang(`  ${label.padEnd(width)}`, 'c-dim', escapeHTML(value), 'hang-field')),
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
      hang(pad, null, text(p.tech, 'c-dim')),
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
    ...skills.map((s) => hang(`  ${s.label.padEnd(width)} `, 'c-dim', text(s.items, 'c-white'), 'hang-field')),
    '',
  ];
};

export const experience = (experience) => [
  heading('experience'),
  ...experience.flatMap((e) => [
    `  ${text(e.role, 'c-green')} ${text('@', 'c-dim')} ${e.link ? link(e.link, e.company) : text(e.company, 'c-white')}`,
    `  ${text([e.period, e.location].filter(Boolean).join(' | '), 'c-dim')}`,
    '',
    ...e.bullets.map((b) => hang('  › ', 'c-dim', text(b, 'c-white'))),
    '',
  ]),
];

export const achievements = (achievements) => [
  heading('achievements'),
  ...achievements.map((a) => hang('  ★ ', 'c-yellow', text(a, 'c-white'))),
  '',
];

export const socials = (socials) => {
  const width = widest(socials.map((s) => s.name)) + 2;
  return [
    heading('socials'),
    ...socials.map((s) => hang(`  ${s.name.padEnd(width)} `, 'c-dim', link(s.url, displayUrl(s.url)), 'hang-field')),
    '',
  ];
};

export const whoami = (profile) =>
  [`\n  ${text(profile.shortName.toLowerCase(), 'c-green')} — ${escapeHTML(profile.whoami)}\n`];

export const resumeOpening = () => [`\n${text('opening resume...', 'c-green')}\n`];

export const resumeBlocked = (url) =>
  [`${text('blocked by browser. visit directly:', 'c-red')} ${link(url)}\n`];

export const agentLog = (line) => `  ${text(line, 'c-dim')}`;
export const agentResult = (line) => `\n  ${text(line, 'c-green')}\n`;
