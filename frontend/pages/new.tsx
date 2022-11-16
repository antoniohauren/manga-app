import axios from 'axios';
import Head from 'next/head';
import { FormEvent, useState } from 'react';
import { CreateMangaDto } from '../../src/manga/dto/create-manga.dto';
import BaseTemplate from '../components/BaseTemplate';

function NewMangaPage() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [completed, setCompleted] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const body: CreateMangaDto = {
      author,
      name,
      completed,
    };

    try {
      await axios.post('http://localhost:3333/manga', body);
      alert('created!');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Head>
        <title>New Manga</title>
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
      </BaseTemplate>
    </>
  );
}

export default NewMangaPage;
