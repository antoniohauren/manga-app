import { CreateMangaDto } from '@domain/manga/dto';
import axios from 'axios';
import { useRouter } from 'next/router';

function useApiCreateManga() {
  const router = useRouter();

  async function exec(body: CreateMangaDto) {
    try {
      await axios.post(`http://localhost:3333/manga`, body);
      alert('created!');

      router.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  return { exec };
}

export { useApiCreateManga };
