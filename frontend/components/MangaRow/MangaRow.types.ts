import { Dispatch, SetStateAction } from 'react';

export type MangaRowProps = {
  id: number;
  name: string;
  author: string;
  read: number;
  bought: number;
  volumes: number;
  setInvalidate: Dispatch<SetStateAction<boolean>>;
};
