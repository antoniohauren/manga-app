import { VolumeRowProps } from './VolumeRow.types';
import S from './VolumeRow.module.scss';
import useApiDeleteVolume from '../../hooks/api/useApiDeleteVolume';
import useApiUpdateVolume, {
  UpdateVolume,
} from '../../hooks/api/useApiUpdateVolume';
import ReadIcon from '../../assets/ReadIcon';
import CartIcon from '../../assets/CartIcon';
import TrashIcon from '../../assets/TrashIcon';

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
    <section className={S.wrapper}>
      <div className={S.infos}>
        <p>Volume {volume_number.toString().padStart(3, '0')}</p>
        <p>{number_pages.toString().padStart(4, '0')} Pages</p>
      </div>

      <div className={S.buttons}>
        <button
          className={read ? S.on : S.off}
          onClick={() => handleUpdate({ read: !read })}
          title="Read"
        >
          <ReadIcon />
        </button>

        <button
          className={bought ? S.on : S.off}
          onClick={() => handleUpdate({ bought: !bought })}
          title="Bought"
        >
          <CartIcon />
        </button>

        <button onClick={handleDelete}>
          <TrashIcon />
        </button>
      </div>
    </section>
  );
}

export default VolumeRow;
