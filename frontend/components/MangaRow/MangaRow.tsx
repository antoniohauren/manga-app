import { MangaRowProps } from './MangaRow.types';
import S from './MangaRow.module.scss';
import Link from 'next/link';

function MangaRow({ id, author, name, bought, read, volumes }: MangaRowProps) {
  return (
    <div className={S.wrapper}>
      <Link className={S.row} href={`/manga/${id}`}>
        <p>{name}</p>
        <p>{author}</p>
        <p>{bought}</p>
        <p>{read}</p>
        <p>{volumes}</p>
      </Link>

      <button>X</button>
    </div>
  );
}

export default MangaRow;
