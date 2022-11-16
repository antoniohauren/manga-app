import { Dispatch, SetStateAction } from 'react';

export type VolumeFormProps = {
  setInvalidate: Dispatch<SetStateAction<boolean>>;
  volumes: number;
};
