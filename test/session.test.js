import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSession } from '../src/session.js';
import { commands } from '../src/commands.js';
import { createMemoryScreen } from './memory-screen.js';

const setup = (opts = {}) => {
  const screen = createMemoryScreen();
  const session = createSession({ screen, commands, sleep: async () => {}, ...opts });
  return { screen, session };
};

test('help lists every command in the table', async () => {
  const { screen, session } = setup();
  await session.execute('help');
  for (const c of commands) assert.match(screen.text(), new RegExp(`${c.name}\\s+— `));
});

test('unknown input is reported and escaped', async () => {
  const { screen, session } = setup();
  await session.execute('<img src=x onerror=alert(1)>');
  assert.match(screen.text(), /command not found: <img/);
  assert.ok(!screen.lines.join('').includes('<img'), 'raw markup must not reach the screen');
});

test('commands are case-insensitive and trimmed', async () => {
  const { screen, session } = setup();
  await session.execute('  WHOAMI ');
  assert.match(screen.text(), /malhar bonde —/);
});

test('silent execute prints no echo and skips history', async () => {
  const { screen, session } = setup();
  await session.execute('whoami', { echo: false });
  assert.doesNotMatch(screen.text(), /guest@malhar\.dev/);
  assert.equal(session.previous(), '');
});

test('history walks back and forward', async () => {
  const { session } = setup();
  await session.execute('about');
  await session.execute('skills');
  assert.equal(session.previous(), 'skills');
  assert.equal(session.previous(), 'about');
  assert.equal(session.previous(), 'about', 'stops at the oldest entry');
  assert.equal(session.next(), 'skills');
  assert.equal(session.next(), '');
});

test('tab completion: unique match fills, several matches are listed', () => {
  const { screen, session } = setup();
  assert.equal(session.complete('pro'), 'projects');
  assert.equal(session.complete('a'), 'a');
  assert.match(screen.text(), /about {3}achievements {3}agent/);
  assert.equal(session.complete('zzz'), 'zzz');
});

test('clear empties the screen', async () => {
  const { screen, session } = setup();
  await session.execute('about');
  await session.execute('clear');
  assert.equal(screen.lines.length, 0);
});

test('projects keep the top of the section in view', async () => {
  const { screen, session } = setup();
  await session.execute('projects');
  assert.equal(screen.scrolls.at(-1), 'start');
});

test('resume reports a blocked popup', async () => {
  const opened = [];
  const { screen, session } = setup({ openUrl: (url) => { opened.push(url); return false; } });
  await session.execute('resume');
  assert.deepEqual(opened, ['resume.pdf']);
  assert.match(screen.text(), /blocked by browser/);
});

test('input is locked while agent runs, from every entry point', async () => {
  let release;
  const gate = new Promise((r) => { release = r; });
  const { screen, session } = setup({ sleep: () => gate });

  const running = session.execute('agent');
  assert.equal(session.busy, true);
  assert.deepEqual(screen.busyLog, [true]);

  // A chip click arrives through execute too; it must be ignored.
  await session.execute('about');
  assert.doesNotMatch(screen.text(), /\/\/ about/);

  release();
  await running;
  assert.equal(session.busy, false);
  assert.deepEqual(screen.busyLog, [true, false]);
  assert.match(screen.text(), /IMMEDIATE HIRE/);
});

test('synchronous commands never touch the lock', async () => {
  const { screen, session } = setup();
  await session.execute('about');
  assert.deepEqual(screen.busyLog, []);
});
