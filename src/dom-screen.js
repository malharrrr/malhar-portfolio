export function createDomScreen(output, input) {
  let restoreInputFocus = false;
  return {
    print(lines, { scroll = 'end' } = {}) {
      let firstRow;
      for (const html of [].concat(lines)) {
        const row = document.createElement('div');
        row.innerHTML = html;
        output.appendChild(row);
        firstRow ??= row;
      }
      const readFromStart = scroll === 'start' || window.matchMedia('(max-width: 600px)').matches;
      output.scrollTop = readFromStart && firstRow ? firstRow.offsetTop : output.scrollHeight;
    },

    clear() {
      output.innerHTML = '';
    },

    setBusy(busy) {
      if (busy) restoreInputFocus = document.activeElement === input;
      input.disabled = busy;
      if (!busy && restoreInputFocus) input.focus({ preventScroll: true });
    },
  };
}
