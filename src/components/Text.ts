import CardData from '../types';

  export default function createText(heading: string, description: string): string {
    
    const article = `
      <article>
          <h1 class="card-heading">${heading}</h1>
          <p class="card-description">${description}</p>
      </article>
    `;
  
    return article;
  }

  