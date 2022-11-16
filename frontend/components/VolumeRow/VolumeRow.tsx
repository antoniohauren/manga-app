import { VolumeRowProps } from './VolumeRow.types';
import S from './VolumeRow.module.scss';
import useApiDeleteVolume from '../../hooks/api/useApiDeleteVolume';

function VolumeRow({
  id,
  bought,
  read,
  number_pages,
  volume_number,
  setInvalidate,
}: VolumeRowProps) {
  const deleteVolume = useApiDeleteVolume(setInvalidate);

  function handleDelete() {
    if (!window.confirm('Delete this volume?')) {
      return;
    }

    deleteVolume.exec(id);
  }

  return (
    <div className={S.wrapper}>
      <p>Volume {volume_number.toString().padStart(3, '0')}</p>
      <p>{number_pages}</p>
      <p className={read ? S.on : S.off}>read</p>
      <p className={bought ? S.on : S.off}>bought</p>

      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default VolumeRow;
