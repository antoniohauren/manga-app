import BaseTemplate from '@components/BaseTemplate';
import MangaList from '@components/MangaList';
import MangaListHeader from '@components/MangaListHeader';
import MangaRow from '@components/MangaRow';
import { useApiListMangas } from '@hooks/api';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [invalidate, setInvalidate] = useState(false);

  const mangas = useApiListMangas(invalidate);

  return (
    <>
      <Head>
        <title>Mangas</title>
      </Head>
      <BaseTemplate>
        <MangaListHeader />
        <MangaList>
          {mangas?.map((manga) => {
            return (
              <MangaRow
                setInvalidate={setInvalidate}
                key={manga.id}
                id={manga.id}
                author={manga.author}
                name={manga.name}
                bought={manga.bought}
                read={manga.read}
                volumes={manga.volumes}
              />
            );
          })}
        </MangaList>
      </BaseTemplate>
    </>
  );
}
