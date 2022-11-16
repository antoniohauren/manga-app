import axios from 'axios';
import { CreateMangaDto } from '../../../src/manga/dto/create-manga.dto';

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

export default useApiCreateManga;
