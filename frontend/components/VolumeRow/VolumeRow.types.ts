import { Dispatch, SetStateAction } from 'react';
import { Volume } from '@domain/volume/entities';

export type VolumeRowProps = Omit<Volume, 'manga'> & {
  setInvalidate: Dispatch<SetStateAction<boolean>>;
};
