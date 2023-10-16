import Link from 'next/link';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">Logo</Link>
      </div>
    </header>
  );
}
