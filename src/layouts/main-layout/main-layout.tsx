import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

import styles from './main-layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();

  const bgImg = pathname === '/' ? styles.mainLayoutImage : '';

  return (
    <div className={`${inter.className} ${styles.mainLayout} ${bgImg}`}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
