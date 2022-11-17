import { CreateMangaDto } from '@domain/manga/dto';
import axios from 'axios';

function useApiCreateManga() {
  async function exec(body: CreateMangaDto) {
    try {
      await axios.post(`http://localhost:3333/manga`, body);
      alert('created!');
    } catch (err) {
      console.log(err);
    }
  }

  return { exec };
}

export { useApiCreateManga };
