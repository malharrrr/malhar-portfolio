import { Terminal } from './terminal.js';
import { ASCII } from './data.js';
const pwScreen = document.getElementById('password-screen');
const termScreen = document.getElementById('terminal-screen');
const pwInput = document.getElementById('pw-input');
const pwHint = document.getElementById('pw-hint');
const asciiBanner = document.getElementById('ascii-banner');
asciiBanner.textContent = ASCII;
let terminal = null;
pwInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (pwInput.value === 'build') {
            pwScreen.classList.add('hidden');
            termScreen.classList.add('visible');
            if (!terminal) {
                const output = document.getElementById('output');
                const input = document.getElementById('cmd-input');
                terminal = new Terminal(output, input);
            }
        }
        else {
            pwInput.value = '';
            pwHint.textContent = 'incorrect password. try again.';
            pwHint.classList.add('error');
            setTimeout(() => {
                pwHint.textContent = 'hint: what malhar loves to do';
                pwHint.classList.remove('error');
            }, 1500);
        }
    }
});
pwInput.focus();
