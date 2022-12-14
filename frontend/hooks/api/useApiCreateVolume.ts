import { CreateVolumeDto } from '@domain/volume/dto';
import { useMangaId } from '@hooks/useMangaId';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';

function useApiCreateVolume(
  setInvalidate: Dispatch<SetStateAction<boolean>>,
  setPages: Dispatch<SetStateAction<string>>,
) {
  const id = useMangaId();
  async function exec(body: Omit<CreateVolumeDto, 'mangaId'>) {
    try {
      await axios.post('http://localhost:3333/volume', {
        ...body,
        mangaId: id,
      });

      alert('crated');
      setInvalidate((value) => !value);
      setPages('');
    } catch (err) {
      console.log(err);
    }
  }

  return { exec };
}

export { useApiCreateVolume };
