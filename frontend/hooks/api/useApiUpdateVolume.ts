import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { UpdateVolumeDto } from '../../../src/volume/dto/update-volume.dto';

export type UpdateVolume = Pick<UpdateVolumeDto, 'bought' | 'read'>;

function useApiUpdateVolume(setInvalidate: Dispatch<SetStateAction<boolean>>) {
  async function exec(id: number, dto: UpdateVolume) {
    try {
      await axios.patch(`http://localhost:3333/volume/${id}`, dto);
      setInvalidate((value) => !value);
    } catch (err) {
      console.log(err);
    }
  }

  return { exec };
}

export default useApiUpdateVolume;
