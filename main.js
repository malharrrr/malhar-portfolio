import { inject } from '@vercel/analytics';
import { profile, socials } from './src/content.js';
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
  const desktopKeyboard = window.matchMedia('(min-width: 601px) and (pointer: fine)');
  const screen = createDomScreen(document.getElementById('output'), input);
  const session = createSession({
    screen,
    commands,
    openUrl: (url) => Boolean(window.open(url, '_blank')),
  });

  const chipsRow = document.querySelector('.chips-row');
  const inputWrap = input.parentElement;

  // Highlight the chip for the section last opened; `clear` resets it.
  const markSection = (raw) => {
    const name = raw.trim().toLowerCase();
    const chip = chipsRow.querySelector(`.chip[data-cmd="${CSS.escape(name)}"]`);
    if (!chip && name !== 'clear') return;
    for (const other of chipsRow.querySelectorAll('.chip')) {
      const active = other === chip;
      other.classList.toggle('is-active', active);
      if (active) other.setAttribute('aria-current', 'true');
      else other.removeAttribute('aria-current');
    }
    chip?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  };

  // The block cursor is drawn in CSS; it needs the caret column and scroll offset.
  const syncCursor = () => {
    inputWrap.style.setProperty('--caret', input.selectionStart ?? input.value.length);
    inputWrap.style.setProperty('--scroll', `${input.scrollLeft}px`);
  };
  for (const type of ['input', 'keydown', 'keyup', 'click', 'focus', 'select']) {
    input.addEventListener(type, () => requestAnimationFrame(syncCursor));
  }

  screen.print(banner(profile, socials));
  document.getElementById('output').scrollTop = 0;
  if (desktopKeyboard.matches) input.focus({ preventScroll: true });

  const keys = {
    Enter: () => {
      const value = input.value;
      input.value = '';
      if (session.busy) return;
      session.execute(value);
      markSection(value);
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

  chipsRow.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip || session.busy) return;
    input.blur();
    session.execute(chip.dataset.cmd);
    markSection(chip.dataset.cmd);
    if (desktopKeyboard.matches) input.focus({ preventScroll: true });
  });
});
