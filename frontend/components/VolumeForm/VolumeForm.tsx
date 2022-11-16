import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CreateVolumeDto } from '../../../src/volume/dto/create-volume.dto';
import { VolumeFormProps } from './VolumeForm.types';

function VolumeForm({ volumes, setInvalidate }: VolumeFormProps) {
  const router = useRouter();
  const { id: mangaId } = router.query;

  const [pages, setPages] = useState('');
  const [volNumber, setVolNumber] = useState<number>();
  const [read, setRead] = useState(false);
  const [bought, setBought] = useState(false);

  useEffect(() => {
    setVolNumber(volumes + 1);
  }, [volumes]);

  async function handleAddVolume() {
    if (!mangaId || !volNumber) return;

    const body: CreateVolumeDto = {
      mangaId: +mangaId,
      number_pages: +pages,
      read: read,
      volume_number: volNumber,
      bought: bought,
    };

    try {
      await axios.post('http://localhost:3333/volume', body);

      setPages('');
      setVolNumber(volumes + 2);
      setRead(false);
      setBought(false);

      setInvalidate((value) => !value);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <form>
      <label>
        Number of pages:
        <input value={pages} onChange={(e) => setPages(e.target.value)} />
      </label>

      <label>
        Volume number:
        <input
          value={volNumber}
          onChange={(e) => setVolNumber(+e.target.value)}
        />
      </label>

      <label>
        <input
          type="checkbox"
          checked={read}
          onChange={(e) => setRead(e.target.checked)}
        />
        Read
      </label>

      <label>
        <input
          type="checkbox"
          checked={bought}
          onChange={(e) => setBought(e.target.checked)}
        />
        Bought
      </label>

      <button type="button" onClick={handleAddVolume}>
        +
      </button>
    </form>
  );
}

export default VolumeForm;
