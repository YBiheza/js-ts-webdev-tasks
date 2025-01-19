/*import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)*/

import i18n from '../i18n.ts';

const locEN = document.querySelector('.loc-en'); 
const locAR = document.querySelector('.loc-ar');

async function main() {

  await i18n.setLanguage('en');

  locEN.addEventListener('click', async () => {
    await i18n.setLanguage('en');
  });

  locAR.addEventListener('click', async () => {
    await i18n.setLanguage('ar');
  })

}

main();