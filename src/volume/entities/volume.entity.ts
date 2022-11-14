import { Manga } from 'src/manga/entities/manga.entity';

export class Volume {
  id: number;
  name: string;
  volume_name: number;
  number_pages: number;
  manga: Manga;
}
