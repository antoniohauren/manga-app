import { MangaRowProps } from './MangaRow.types';
import S from './MangaRow.module.scss';

function MangaRow({ author, name, bought, read, volumes }: MangaRowProps) {
  return (
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
  );
}

export default MangaRow;
