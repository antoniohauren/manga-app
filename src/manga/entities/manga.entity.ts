import { Volume } from '../../volume/entities';
export class Manga {
  id: number;
  name: string;
  author: string;
  completed: boolean;
  volumes: Volume[];
}
