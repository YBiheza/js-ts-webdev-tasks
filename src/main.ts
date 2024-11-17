import  Card  from './components/Card';
import database from './db/cards.json';
import CardData from './types';

const header = document.createElement('div');
header.setAttribute('class', 'header');
document.body.prepend(header)

const h1 = document.createElement('h1');
h1.classList.add('Title');
h1.innerHTML = 'Our Works';

const headerText = document.createElement('p');
headerText.classList.add('headerText')
headerText.innerHTML = 'The most important part of the Startup Framework is the samples. The samples form a set of 20 usable pages you can use as is or you can add new blocks from UI Kit.';
header.prepend(h1, headerText);




const data: CardData[] = database;

const cardsHtml = data.map((item) => Card(item)).join("");

const container = document.querySelector(".container");

if (container) {
  container.innerHTML = cardsHtml;
}

console.log("Карточки успешно сгенерированы!");