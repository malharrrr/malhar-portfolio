import { inject } from '@vercel/analytics';
import { profile } from './src/content.js';
import { commands } from './src/commands.js';
import { createSession } from './src/session.js';
import { createDomScreen } from './src/dom-screen.js';
import { banner } from './src/terminal-view.js';

inject({
  mode: 'auto',
  debug: false
});

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('cmd-input');
  const screen = createDomScreen(document.getElementById('output'), input);
  const session = createSession({
    screen,
    commands,
    openUrl: (url) => Boolean(window.open(url, '_blank')),
  });

  screen.print(banner(profile));
  session.execute('help', { echo: false });

  const keys = {
    Enter: () => {
      const value = input.value;
      input.value = '';
      session.execute(value);
    },
    ArrowUp: () => { input.value = session.previous(); },
    ArrowDown: () => { input.value = session.next(); },
    Tab: () => { input.value = session.complete(input.value); },
  };

  input.addEventListener('keydown', (e) => {
    const action = keys[e.key];
    if (!action) return;
    // An empty input lets Tab move focus on to the chips (keyboard navigation).
    if (e.key === 'Tab' && !input.value.trim()) return;
    e.preventDefault();
    if (!session.busy) action();
  });

  document.querySelector('.chips-row').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    session.execute(chip.dataset.cmd);
    input.focus();
  });

  document.getElementById('terminal-screen').addEventListener('click', () => {
    const selection = window.getSelection();
    if (!selection || selection.toString().length === 0) input.focus();
  });
});
