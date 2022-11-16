import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { CreateVolumeDto } from '../../../src/volume/dto/create-volume.dto';
import useMangaId from '../useMangaId';

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

export default useApiCreateVolume;
