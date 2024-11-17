import CardData  from '../types';
import Image from './Image';
import  Text  from './Text';
import  Tags from './Tags';

export default function Card(data: CardData): string {
  const imageHtml = Image(data.image);
  const textHtml = Text(data.heading, data.description);
  const tagsHtml = Tags(data.tags);

  return `
    <div class="card">
      ${imageHtml}
      <div class="textblock">
      ${textHtml}
      ${tagsHtml}
      </div>
    </div>
  `;
}