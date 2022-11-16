import { FormEvent, useEffect, useState } from 'react';
import { CreateMangaDto } from '../../../src/manga/dto/create-manga.dto';
import useApiCreateManga from '../../hooks/api/useApiCreateManga';
import useApiUpdateManga from '../../hooks/api/useApiUpdateManga';
import { UpsertMangaFormProps } from './UpsertMangaForm.types';

function UpsertMangaForm({
  isUpdating = false,
  defaultValues,
}: UpsertMangaFormProps) {
  const [name, setName] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [completed, setCompleted] = useState<boolean>();

  const createManga = useApiCreateManga();
  const updateManga = useApiUpdateManga();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (author === undefined || name === undefined) return;

    const body: CreateMangaDto = {
      author,
      name,
      completed: completed || false,
    };

    if (isUpdating) {
      updateManga.exec(body);
    } else {
      createManga.exec(body);
    }
  }

  useEffect(() => {
    setName(defaultValues?.name);
    setAuthor(defaultValues?.author);
    setCompleted(defaultValues?.completed);
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
