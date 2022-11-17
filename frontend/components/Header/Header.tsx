import Link from 'next/link';
import { HeaderProps } from '.';

import S from './Header.module.scss';

function Header({ children }: HeaderProps) {
  return (
    <header className={S.container}>
      {children}
      <nav className={S.nav}>
        <Link href="/">Home</Link>
        <Link href="/manga/new">New manga</Link>
      </nav>
    </header>
  );
}

export default Header;
