import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'antd';

import NavMenu from '@/components/nav-menu/nav-menu';
import Search from '@/components/search/search';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import burgerImg from '../../../public/burger-black.svg';
import logo from '../../../public/logo-black.svg';

import styles from './header.module.scss';

interface IProps {
  showDrawer: () => void;
}

export default function Header({ showDrawer }: IProps) {
  const { pathname } = useRouter();

  const isMobileOrTablet = useMediaQuery('(max-width: 768px)');

  const svgBlackToWhite = pathname === '/' ? styles.svgWhite : '';

  return (
    <header id="header" className={styles.header}>
      <Button className={styles.burger} type="link" onClick={showDrawer}>
        <Image
          className={svgBlackToWhite}
          src={burgerImg}
          alt="burger"
          width={26}
          height={26}
        />
      </Button>

      <div className={styles.top}>
        <Link href="/">
          <Image
            className={svgBlackToWhite}
            src={logo}
            alt="logo"
            width={150}
            height={30}
          />
        </Link>
        <Search />
      </div>
      {!isMobileOrTablet && <NavMenu />}
    </header>
  );
}
