import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import BaseTemplate from '../../components/BaseTemplate';
import { UpdateMangaDto } from '../../../src/manga/dto/update-manga.dto';
import { Volume } from '../../../src/volume/entities/volume.entity';
import VolumeRow from '../../components/VolumeRow';
import VolumeForm from '../../components/VolumeForm';

function MangaDetails() {
  const router = useRouter();
  const { id: mangaId } = router.query;

  const [invalidate, setInvalidate] = useState(false);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [completed, setCompleted] = useState(false);
  // volume
  const [volumes, setVolumes] = useState<Omit<Volume, 'manga'>[]>([]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const body: UpdateMangaDto = {
      author,
      name,
      completed,
    };

    try {
      await axios.patch(`http://localhost:3333/manga/${mangaId}`, body);
      alert('created!');
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (!mangaId) {
      return;
    }

    (async () => {
      const { data } = await axios.get(
        `http://localhost:3333/manga/${mangaId}`,
      );

      setName(data.name);
      setAuthor(data.author);
      setCompleted(data.completed);
      setVolumes(data.volumes);
    })();
  }, [mangaId, invalidate]);

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <BaseTemplate>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            Author
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </label>

          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            Completed
          </label>
          <button>Cadastrar</button>
        </form>

        <h1>volumes</h1>

        {volumes.map((volume) => {
          return <VolumeRow key={volume.id} {...volume} />;
        })}

        <VolumeForm setInvalidate={setInvalidate} volumes={volumes?.length} />
      </BaseTemplate>
    </>
  );
}

export default MangaDetails;
