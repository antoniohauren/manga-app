import S from './MangaListHeader.module.scss';

function MangaListHeader() {
  return (
    <section className={S.wrapper}>
      <p>Name</p>
      <p>Author</p>
      <p>Bought</p>
      <p>Read</p>
      <p>Volumes</p>
    </section>
  );
}

export default MangaListHeader;
