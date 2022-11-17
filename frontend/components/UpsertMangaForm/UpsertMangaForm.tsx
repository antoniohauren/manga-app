import { FormEvent, useEffect, useState } from 'react';
import { CreateMangaDto } from '@domain/manga/dto/create-manga.dto';
import { useApiCreateManga, useApiUpdateManga } from '@hooks/api';
import { UpsertMangaFormProps } from '.';

import S from './UpsertMangaForm.module.scss';

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
    <form onSubmit={handleSubmit} className={S.wrapper}>
      <label className={S.input}>
        Name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label className={S.input}>
        Author
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </label>

      <label className={S.check}>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Completed
      </label>

      <button>Create Manga</button>
    </form>
  );
}

export default UpsertMangaForm;
