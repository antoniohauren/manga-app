import CartIcon from '@assets/CartIcon';
import CreateIcon from '@assets/CreateIcon';
import ReadIcon from '@assets/ReadIcon';
import { useApiCreateVolume } from '@hooks/api';
import { useEffect, useState } from 'react';
import { VolumeFormProps } from '.';

import S from './VolumeForm.module.scss';

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
    <form className={S.wrapper}>
      <label className={S.input}>
        Number of pages:
        <input
          value={pages}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '');
            setPages(value);
          }}
        />
      </label>

      <label className={S.input}>
        Volume number:
        <input
          value={volNumber}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '');
            setVolNumber(+value);
          }}
        />
      </label>

      <div className={S.buttons}>
        <button
          type="button"
          onClick={() => setRead((value) => !value)}
          className={read ? S.on : S.off}
        >
          <ReadIcon />
        </button>

        <button
          type="button"
          onClick={() => setBought((value) => !value)}
          className={bought ? S.on : S.off}
        >
          <CartIcon />
        </button>

        <button className={S.add} type="button" onClick={handleAddVolume}>
          <CreateIcon />
        </button>
      </div>
    </form>
  );
}

export default VolumeForm;
