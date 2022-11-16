import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { UpdateMangaDto } from '../../../src/manga/dto/update-manga.dto';
import useMangaId from '../../hooks/useMangaId';
import { UpsertMangaFormProps } from './UpsertMangaForm.types';

function UpsertMangaForm({
  isUpdating = false,
  defaultValues,
}: UpsertMangaFormProps) {
  const mangaId = useMangaId();

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [completed, setCompleted] = useState(false);

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
    setName(defaultValues.name);
    setAuthor(defaultValues.author);
    setCompleted(defaultValues.completed);
  }, [defaultValues]);

  return (
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
  );
}

export default UpsertMangaForm;
