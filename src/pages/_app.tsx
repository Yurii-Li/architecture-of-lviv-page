import type { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';

import MainLayout from '@/layouts/main-layout/main-layout';
import customTheme from '@/theme/custom-theme';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  const is404Page = Component.name === 'NotFoundPage';

  if (is404Page) {
    return (
      <ConfigProvider theme={customTheme}>
        <Component {...pageProps} />
      </ConfigProvider>
    );
  }

  return (
    <ConfigProvider theme={customTheme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ConfigProvider>
  );
}
