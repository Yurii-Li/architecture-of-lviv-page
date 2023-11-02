import Link from 'next/link';
import { useRouter } from 'next/router';

import NavMenu from '@/components/nav-menu/nav-menu';
import Search from '@/components/search/search';

import styles from './header.module.scss';

export default function Header() {
  const { pathname } = useRouter();

  const notShowNavMenu = pathname === '/architecture/[category]/[id]';

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Link href="/">Logo</Link>
        <Search />
      </div>
      {!notShowNavMenu && <NavMenu />}
    </header>
  );
}
