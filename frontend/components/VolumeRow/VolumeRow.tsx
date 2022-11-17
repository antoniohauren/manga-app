import { VolumeRowProps } from './VolumeRow.types';
import S from './VolumeRow.module.scss';
import useApiDeleteVolume from '../../hooks/api/useApiDeleteVolume';
import useApiUpdateVolume, {
  UpdateVolume,
} from '../../hooks/api/useApiUpdateVolume';

function VolumeRow({
  id,
  bought,
  read,
  number_pages,
  volume_number,
  setInvalidate,
}: VolumeRowProps) {
  const deleteVolume = useApiDeleteVolume(setInvalidate);
  const updateVolume = useApiUpdateVolume(setInvalidate);

  function handleDelete() {
    if (!window.confirm('Delete this volume?')) {
      return;
    }

    deleteVolume.exec(id);
  }

  function handleUpdate(dto: UpdateVolume) {
    updateVolume.exec(id, dto);
  }

  return (
    <div className={S.wrapper}>
      <p>Volume {volume_number.toString().padStart(3, '0')}</p>
      <p>{number_pages}</p>

      <button
        className={read ? S.on : S.off}
        onClick={() => handleUpdate({ read: !read })}
      >
        read
      </button>
      <button
        className={bought ? S.on : S.off}
        onClick={() => handleUpdate({ bought: !bought })}
      >
        bought
      </button>

      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default VolumeRow;
