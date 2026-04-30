import { Terminal } from './terminal';
import { ASCII } from './data';

const pwScreen = document.getElementById('password-screen') as HTMLElement;
const termScreen = document.getElementById('terminal-screen') as HTMLElement;
const pwInput = document.getElementById('pw-input') as HTMLInputElement;
const pwHint = document.getElementById('pw-hint') as HTMLElement;
const asciiBanner = document.getElementById('ascii-banner') as HTMLElement;
const guestBtn = document.getElementById('guest-bypass') as HTMLButtonElement; 

asciiBanner.textContent = ASCII; 

let terminal: any = null; 

const unlockTerminal = () => {
    pwScreen.classList.add('hidden');
    termScreen.classList.add('visible');
    if (!terminal) {
        const output = document.getElementById('output') as HTMLElement;
        const input = document.getElementById('cmd-input') as HTMLInputElement;
        terminal = new Terminal(output, input);
    }
};

pwInput.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        if (pwInput.value === 'build') { 
            unlockTerminal();
        } else {
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
guestBtn.addEventListener('click', unlockTerminal);
pwInput.focus();