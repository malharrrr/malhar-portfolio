import * as view from './terminal-view.js';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function createSession({ screen, commands, openUrl = () => false, sleep = wait }) {
  const byName = new Map(commands.map((c) => [c.name, c]));
  const ctx = {
    print: (lines, opts) => screen.print(lines, opts),
    clear: () => screen.clear(),
    openUrl,
    sleep,
    commands,
  };
  const history = [];
  let histIdx = -1;
  let busy = false;

  async function execute(raw, { echo = true } = {}) {
    const input = raw.trim();
    if (busy || !input) return;

    if (echo) {
      history.unshift(input);
      histIdx = -1;
      screen.print(view.echo(input));
    }

    const command = byName.get(input.toLowerCase());
    if (!command) {
      screen.print(view.notFound(input));
      return;
    }

    const result = command.run(ctx);
    if (!result || typeof result.then !== 'function') return;

    busy = true;
    screen.setBusy(true);
    try {
      await result;
    } finally {
      busy = false;
      screen.setBusy(false);
    }
  }

  function complete(partial) {
    const prefix = partial.trim().toLowerCase();
    if (!prefix) return partial;
    const matches = commands.map((c) => c.name).filter((name) => name.startsWith(prefix));
    if (matches.length === 1) return matches[0];
    if (matches.length > 1) screen.print(view.completions(prefix, matches));
    return partial;
  }

  function previous() {
    if (histIdx < history.length - 1) histIdx++;
    return history[histIdx] ?? '';
  }

  function next() {
    if (histIdx > 0) return history[--histIdx];
    histIdx = -1;
    return '';
  }

  return {
    execute,
    complete,
    previous,
    next,
    get busy() { return busy; },
  };
}
