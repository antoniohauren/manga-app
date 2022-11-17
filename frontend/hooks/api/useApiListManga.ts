import axios from 'axios';
import { useEffect, useState } from 'react';
import { Manga } from '@domain/manga/entities';

type MangaDomain = Pick<Manga, 'id' | 'name' | 'author' | 'completed'> & {
  volumes: number;
  read: number;
  bought: number;
};

function useApiListMangas(invalidate: boolean) {
  const [mangas, setMangas] = useState<MangaDomain[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('http://localhost:3333/manga');
      setMangas(data);
    })();
  }, [invalidate]);

  return mangas;
}

export { useApiListMangas };
