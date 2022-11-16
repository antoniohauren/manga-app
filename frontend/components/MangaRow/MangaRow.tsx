import { MangaRowProps } from './MangaRow.types';
import S from './MangaRow.module.scss';

function MangaRow({ author, name, bought, read, volumes }: MangaRowProps) {
  return (
    <section className={S.wrapper}>
      <p>{name}</p>
      <p>{author}</p>
      <p>{bought}</p>
      <p>{read}</p>
      <p>{volumes}</p>

      <button>X</button>
    </section>
  );
}

export default MangaRow;
