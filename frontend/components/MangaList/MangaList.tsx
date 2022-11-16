import S from './MangaList.module.scss';
import { MangaListProps } from './MangaList.types';

function MangaList({ children }: MangaListProps) {
  return <div className={S.wrapper}>{children}</div>;
}

export default MangaList;
