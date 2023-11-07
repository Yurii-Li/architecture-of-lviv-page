import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NavMenu from '@/components/nav-menu/nav-menu';
import Search from '@/components/search/search';

import logoBlack from '../../../public/logo-black.svg';
import logoWhite from '../../../public/logo-white.svg';

import styles from './header.module.scss';

export default function Header() {
  const { pathname } = useRouter();

  const notShowNavMenu = pathname === '/architecture/[category]/[id]';

  const logo = pathname === '/' ? logoWhite : logoBlack;

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Link href="/">
          <Image src={logo} alt="logo" width={150} height={30} />
        </Link>
        <Search />
      </div>
      {!notShowNavMenu && <NavMenu />}
    </header>
  );
}
