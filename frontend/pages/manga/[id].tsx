import Head from 'next/head';
import BaseTemplate from '../../components/BaseTemplate';
import VolumeRow from '../../components/VolumeRow';
import VolumeForm from '../../components/VolumeForm';
import UpsertMangaForm from '../../components/UpsertMangaForm';
import useApiGetManga from '../../hooks/api/useApiGetManga';
import useMangaId from '../../hooks/useMangaId';
import { useState } from 'react';

function MangaDetails() {
  const [invalidate, setInvalidate] = useState(false);

  const mangaId = useMangaId();
  const { name, author, completed, volumes } = useApiGetManga(
    mangaId,
    invalidate,
  );

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <BaseTemplate>
        <UpsertMangaForm
          isUpdating
          defaultValues={{ name, author, completed }}
        />

        <h1>volumes</h1>

        {volumes?.map((volume) => {
          return (
            <VolumeRow
              key={volume.id}
              {...volume}
              setInvalidate={setInvalidate}
            />
          );
        })}

        <VolumeForm
          setInvalidate={setInvalidate}
          volumes={volumes?.length || 0}
        />
      </BaseTemplate>
    </>
  );
}

export default MangaDetails;
