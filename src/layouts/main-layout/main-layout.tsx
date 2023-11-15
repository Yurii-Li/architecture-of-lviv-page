import React, { ReactNode, useState } from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import { Drawer } from 'antd';

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import NavMenu from '@/components/nav-menu/nav-menu';

import styles from './main-layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();

  const isHomePage = pathname === '/';

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={`${inter.className} ${styles.mainLayout}`}>
      {isHomePage && (
        <div className={styles.bgImg}>
          <Image
            src="/background.jpg"
            alt="Зображення Львова"
            quality={100}
            priority
            fill
            sizes="100vw"
          />
        </div>
      )}
      <Header showDrawer={showDrawer} />
      <Drawer
        title="Категорії"
        placement="right"
        onClose={onClose}
        onClick={onClose}
        open={open}
      >
        <NavMenu />
      </Drawer>
      <NextNProgress height={5} options={{ showSpinner: false }} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
