import React, { ReactNode } from 'react';
import { Layout } from 'antd';

import SidePanel from '@/components/side-panel/side-panel';

const { Content } = Layout;

export default function ArchitectureLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <Layout>
        <SidePanel />
        <Content>{children}</Content>
      </Layout>
    </div>
  );
}
