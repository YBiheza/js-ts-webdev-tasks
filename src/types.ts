  export default interface ImageType {
    name: string;
    alt: string;
  }

  export default interface TagType {
    slug: string;
    title: string;
  }

  export default interface CardData {
    heading: string;        // Заголовок карточки
    description: string;    // Описание
    image: ImageType;       // Объект с данными об изображении
    tags: TagType[];        // Массив тегов
  }