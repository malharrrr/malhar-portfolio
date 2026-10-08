// In-memory adapter for the session's screen (the DOM one is src/dom-screen.js).
export function createMemoryScreen() {
  const screen = {
    lines: [],
    busyLog: [],
    scrolls: [],
    print(lines, { scroll = 'end' } = {}) {
      screen.lines.push(...[].concat(lines));
      screen.scrolls.push(scroll);
    },
    clear() {
      screen.lines.length = 0;
    },
    setBusy(busy) {
      screen.busyLog.push(busy);
    },
    // Visible text, with tags stripped and entities decoded.
    text() {
      return screen.lines
        .join('\n')
        .replace(/<[^>]+>/g, '')
        .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
    },
  };
  return screen;
}
