import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';

function useApiDeleteVolume(setInvalidate: Dispatch<SetStateAction<boolean>>) {
  async function exec(id: number) {
    try {
      await axios.delete(`http://localhost:3333/volume/${id}`);
      setInvalidate((value) => !value);
    } catch (err) {
      console.log(err);
    }
  }

  return { exec };
}

export { useApiDeleteVolume };
