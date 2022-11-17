import TrashIcon from '@assets/TrashIcon';
import { useApiDeleteManga } from '@hooks/api/useApiDeleteManga';
import Link from 'next/link';
import { MangaRowProps } from '.';

import S from './MangaRow.module.scss';

function MangaRow({
  id,
  author,
  name,
  bought,
  read,
  volumes,
  setInvalidate,
}: MangaRowProps) {
  const deleteManga = useApiDeleteManga(setInvalidate);

  function handleDelete() {
    if (!window.confirm('Delete this manga?')) {
      return;
    }

    deleteManga.exec(id);
  }

  return (
    <div className={S.wrapper}>
      <Link className={S.row} href={`/manga/${id}`}>
        <p>{name}</p>
        <p>{author}</p>
        <p>{bought}</p>
        <p>{read}</p>
        <p>{volumes}</p>
      </Link>

      <button className={S.trash} onClick={handleDelete}>
        <TrashIcon />
      </button>
    </div>
  );
}

export default MangaRow;
