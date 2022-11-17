import { MangaListProps } from '.';

import S from './MangaList.module.scss';

function MangaList({ children }: MangaListProps) {
  return <div className={S.wrapper}>{children}</div>;
}

export default MangaList;
