import { Volume } from 'src/volume/entities/volume.entity';

export class Manga {
  id: number;
  name: string;
  author: string;
  completed: boolean;
  volumes: Volume[];
}
