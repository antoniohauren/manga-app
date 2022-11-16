import Link from 'next/link';
import S from './Header.module.scss';
import { HeaderProps } from './Header.types';

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
