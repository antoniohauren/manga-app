import { MangaRowProps } from './MangaRow.types';
import S from './MangaRow.module.scss';
import Link from 'next/link';

function MangaRow({ id, author, name, bought, read, volumes }: MangaRowProps) {
  return (
    <Link href={`/manga/${id}`}>
      <div className={S.wrapper}>
        <section className={S.row}>
          <p>{name}</p>
          <p>{author}</p>
          <p>{bought}</p>
          <p>{read}</p>
          <p>{volumes}</p>
        </section>
        <button>X</button>
      </div>
    </Link>
  );
}

export default MangaRow;
