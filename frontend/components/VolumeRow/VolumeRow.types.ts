import { Dispatch, SetStateAction } from 'react';
import { Volume } from '../../../src/volume/entities/volume.entity';

export type VolumeRowProps = Omit<Volume, 'manga'> & {
  setInvalidate: Dispatch<SetStateAction<boolean>>;
};
