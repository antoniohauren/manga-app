import S from './Header.module.scss';
import { HeaderProps } from './Header.types';

function Header({ children }: HeaderProps) {
  return <header className={S.container}>{children}</header>;
}

export default Header;
