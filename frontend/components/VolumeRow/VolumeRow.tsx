import { VolumeRowProps } from './VolumeRow.types';
import S from './VolumeRow.module.scss';

function VolumeRow({
  id,
  bought,
  read,
  number_pages,
  volume_number,
}: VolumeRowProps) {
  return (
    <div className={S.wrapper}>
      <p>Volume {volume_number.toString().padStart(3, '0')}</p>
      <p>{number_pages}</p>
      <p className={read ? S.on : S.off}>read</p>
      <p className={bought ? S.on : S.off}>bought</p>
    </div>
  );
}

export default VolumeRow;
