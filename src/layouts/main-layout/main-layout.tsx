import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

import styles from './main-layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${inter.className} ${styles.mainLayout}`}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
