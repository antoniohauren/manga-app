import Head from 'next/head';
import BaseTemplate from '../../components/BaseTemplate';
import UpsertMangaForm from '../../components/UpsertMangaForm';

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
