export function createDomScreen(output, input) {
  return {
    print(lines, { scroll = 'end' } = {}) {
      const start = output.scrollHeight;
      for (const html of [].concat(lines)) {
        const row = document.createElement('div');
        row.innerHTML = html;
        output.appendChild(row);
      }
      output.scrollTop = scroll === 'start' ? start : output.scrollHeight;
    },

    clear() {
      output.innerHTML = '';
    },

    setBusy(busy) {
      input.disabled = busy;
      if (!busy) input.focus();
    },
  };
}
