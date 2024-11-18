import ImageType from '../types';
  
  export default function createImage(image: ImageType): string {
    const imgUrl = new URL(`../../${image.name}`, import.meta.url).href
    return `
      <img 
        src="${imgUrl}" 
        alt="${image.alt}" 
        class="card-image" 
      />
    `;
  }
