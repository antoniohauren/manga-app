import axios from 'axios';
import { useEffect, useState } from 'react';
import { Volume } from '@domain/volume/entities';

function useApiGetManga(id: number | undefined, invalidate: boolean) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [completed, setCompleted] = useState(false);
  const [volumes, setVolumes] = useState<Omit<Volume, 'manga'>[]>();

  useEffect(() => {
    if (!id) return;

    (async () => {
      const { data } = await axios.get(`http://localhost:3333/manga/${id}`);

      setName(data.name);
      setAuthor(data.author);
      setCompleted(data.completed);
      setVolumes(data.volumes);
    })();
  }, [id, invalidate]);

  return { name, author, completed, volumes };
}

export { useApiGetManga };
