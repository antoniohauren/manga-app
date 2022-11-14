import { Volume } from 'src/volume/entities/volume.entity';

export class Manga {
  id: number;
  name: string;
  volumes: Volume[];
}
