import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Layout, Menu } from 'antd';

import Header from '@/components/header/header';
import { CategoriesEnum } from '@/enums/categories.enum';

const inter = Inter({ subsets: ['latin'] });

const { Sider, Content } = Layout;

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={inter.className}>
      <Header />
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0" theme="light">
          <div className="demo-logo-vertical" />
          <Menu
            items={[
              {
                key: '1',
                label: (
                  <Link
                    href={{
                      pathname: `/architecture/${CategoriesEnum.TEMPLES}`,
                      query: { page: 1 }
                    }}
                  >
                    Храми
                  </Link>
                )
              },
              {
                key: '2',
                label: (
                  <Link
                    href={{
                      pathname: `/architecture/${CategoriesEnum.DEFENSE_STRUCTURES}`,
                      query: { page: 1 }
                    }}
                  >
                    Оборонні споруди
                  </Link>
                )
              },
              {
                key: '3',
                label: (
                  <Link
                    href={{
                      pathname: `/architecture/${CategoriesEnum.MUSEUMS}`,
                      query: { page: 1 }
                    }}
                  >
                    Музеї
                  </Link>
                )
              }
            ]}
          />
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </div>
  );
}
