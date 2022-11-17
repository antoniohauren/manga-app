import axios from 'axios';
import { useMangaId } from '@hooks/useMangaId';
import { UpdateMangaDto } from '@domain/manga/dto';

function useApiUpdateManga() {
  const id = useMangaId();

  async function exec(body: UpdateMangaDto) {
    try {
      await axios.patch(`http://localhost:3333/manga/${id}`, body);
      alert('updated!');
    } catch (err) {
      console.log(err);
    }
  }

  return { exec };
}

export { useApiUpdateManga };
