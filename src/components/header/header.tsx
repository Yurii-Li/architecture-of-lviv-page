import Link from 'next/link';

import Search from '@/components/search/search';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <Search />
    </header>
  );
}
