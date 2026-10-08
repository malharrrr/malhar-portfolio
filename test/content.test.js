import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import * as content from '../src/content.js';
import { commands } from '../src/commands.js';
import { createSession } from '../src/session.js';
import { escapeHTML } from '../src/html.js';
import { fillIndexHtml, renderJsonLd, renderChips } from '../src/static-html.js';
import { createMemoryScreen } from './memory-screen.js';

const terminalOutput = async (...names) => {
  const screen = createMemoryScreen();
  const session = createSession({ screen, commands, sleep: async () => {} });
  for (const name of names) await session.execute(name);
  return screen.text();
};

const page = fillIndexHtml(readFileSync(new URL('../index.html', import.meta.url), 'utf8'));
const srOnly = page.slice(page.indexOf('<div class="sr-only">'), page.indexOf('<div id="terminal-screen">'));

test('index.html has no unfilled placeholders', () => {
  assert.doesNotMatch(page, /<!-- portfolio:/);
});

test('fillIndexHtml refuses a template missing a placeholder', () => {
  assert.throws(() => fillIndexHtml('<html></html>'), /missing <!-- portfolio:json-ld -->/);
});

test('every project appears in the terminal and the static HTML, in the same order', async () => {
  const terminal = await terminalOutput('projects');
  const names = content.projects.map((p) => p.name);
  const order = (haystack) => names.map((n) => haystack.indexOf(n));

  for (const p of content.projects) {
    assert.ok(terminal.includes(p.description), `terminal: ${p.name}`);
    assert.ok(terminal.includes(p.link), `terminal link: ${p.name}`);
    assert.ok(srOnly.includes(escapeHTML(p.description)), `sr-only: ${p.name}`);
    assert.ok(srOnly.includes(`href="${p.link}"`), `sr-only link: ${p.name}`);
  }
  assert.deepEqual([...order(terminal)].sort((a, b) => a - b), order(terminal));
  assert.deepEqual([...order(srOnly)].sort((a, b) => a - b), order(srOnly));
});

test('experience, skills and achievements appear in both renderings', async () => {
  const terminal = await terminalOutput('experience', 'skills', 'achievements');
  const facts = [
    ...content.experience.flatMap((e) => [e.role, e.company, ...e.bullets]),
    ...content.skills.map((s) => s.items),
    ...content.achievements,
  ];
  for (const fact of facts) {
    assert.ok(terminal.includes(fact), `terminal: ${fact.slice(0, 40)}`);
    assert.ok(srOnly.includes(escapeHTML(fact)), `sr-only: ${fact.slice(0, 40)}`);
  }
});

test('profile and socials appear in the terminal, static HTML and JSON-LD', async () => {
  const terminal = await terminalOutput('about', 'socials');
  const ld = JSON.parse(renderJsonLd(content).replace(/^<script[^>]*>|<\/script>$/g, ''));

  assert.equal(ld.name, content.profile.name);
  assert.equal(ld.jobTitle, content.profile.role);
  assert.ok(terminal.includes(content.profile.summary));
  assert.ok(srOnly.includes(escapeHTML(content.profile.summary)));

  for (const s of content.socials) {
    assert.ok(srOnly.includes(`href="${s.url}"`), `sr-only: ${s.name}`);
    assert.ok(terminal.includes(s.url.replace(/^[a-z]+:(\/\/)?/, '')), `terminal: ${s.name}`);
  }
  assert.deepEqual(ld.sameAs, content.socials.filter((s) => s.url.startsWith('http')).map((s) => s.url));
  assert.equal(`mailto:${ld.email}`, content.socials.find((s) => s.name === 'email').url);
});

test('chips are derived from the command table', () => {
  const chips = renderChips(commands);
  for (const c of commands) {
    const expected = c.chip !== false;
    assert.equal(chips.includes(`data-cmd="${c.name}"`), expected, c.name);
  }
  assert.ok(page.includes(chips));
});

test('command names are unique', () => {
  const names = commands.map((c) => c.name);
  assert.equal(new Set(names).size, names.length);
});
