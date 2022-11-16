import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import BaseTemplate from '../components/BaseTemplate';
import MangaListHeader from '../components/MangaListHeader';
import MangaRow from '../components/MangaRow';

export default function Home() {
  const [mangas, setMangas] = useState<
    {
      id: number;
      name: string;
      author: string;
      bought: number;
      read: number;
      volumes: number;
    }[]
  >([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('http://localhost:3333/manga');

      console.log(data);

      setMangas(data);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Mangas</title>
      </Head>
      <BaseTemplate>
        <MangaListHeader />
        {mangas.map((manga) => {
          return (
            <MangaRow
              key={manga.id}
              author={manga.author}
              name={manga.name}
              bought={manga.bought}
              read={manga.read}
              volumes={manga.volumes}
            />
          );
        })}
      </BaseTemplate>
    </>
  );
}
