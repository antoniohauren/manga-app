import { useRouter } from 'next/router';

function useMangaId(): number | undefined {
  const router = useRouter();
  const { id: mangaId } = router.query;

  if (mangaId) {
    return +mangaId;
  }

  return undefined;
}

export { useMangaId };
