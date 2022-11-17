import { useEffect, useState } from 'react';
import CreateIcon from '../../assets/CreateIcon';
import useApiCreateVolume from '../../hooks/api/useApiCreateVolume';
import { VolumeFormProps } from './VolumeForm.types';

function VolumeForm({ volumes, setInvalidate }: VolumeFormProps) {
  const [pages, setPages] = useState('');
  const [volNumber, setVolNumber] = useState<number>();
  const [read, setRead] = useState(false);
  const [bought, setBought] = useState(false);

  const createVolume = useApiCreateVolume(setInvalidate, setPages);

  async function handleAddVolume() {
    if (!volNumber) return;

    createVolume.exec({
      bought,
      volume_number: volNumber,
      read,
      number_pages: +pages,
    });
  }

  useEffect(() => {
    setVolNumber(volumes + 1);
  }, [volumes]);

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

      <button style={{ width: '40px' }} type="button" onClick={handleAddVolume}>
        <CreateIcon />
      </button>
    </form>
  );
}

export default VolumeForm;
