import { Manga } from '../../manga/entities';

export class Volume {
  id: number;
  volume_number: number;
  number_pages: number;
  read: boolean;
  bought: boolean;
  manga: Manga;
}
