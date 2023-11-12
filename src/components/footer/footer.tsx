import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/logo-black.svg';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="/">
        <Image
          className={styles.svgWhite}
          src={logo}
          alt="Логотип"
          width={150}
          height={30}
        />
      </Link>
      <p>Explore. Dream. Discover. &#10024;</p>
    </div>
  );
}
