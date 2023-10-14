import React from 'react';
import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

function MyDocument() {
  return (
    <Html lang="uk">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => (
        <StyleProvider cache={cache}>
          <App {...props} />
        </StyleProvider>
      )
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {/* eslint-disable-next-line react/no-danger */}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    )
  };
};

export default MyDocument;
