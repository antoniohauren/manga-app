import BaseTemplate from '@components/BaseTemplate';
import UpsertMangaForm from '@components/UpsertMangaForm';
import Head from 'next/head';

function NewMangaPage() {
  return (
    <>
      <Head>
        <title>New Manga</title>
      </Head>

      <BaseTemplate>
        <UpsertMangaForm />
      </BaseTemplate>
    </>
  );
}

export default NewMangaPage;
