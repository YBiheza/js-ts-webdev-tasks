import ImageType from '../types';
  
  export default function createImage(image: ImageType): string {
    return `
      <img 
        src="src/assets/images/${image.name}" 
        alt="${image.alt}" 
        class="card-image" 
      />
    `;
  }
  