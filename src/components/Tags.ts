
import TagType from '../types';

export default function createTags(tags: TagType[]): string {
  return `
    <div class="card-tags">
      ${tags
        .map((tag) => `<span class="tag">${tag.title}</span>`)
        .join(', ')}
    </div>
  `;
}