import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import Header from '@/components/header/header';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={inter.className}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
