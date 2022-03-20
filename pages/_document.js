import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    const fontBaseUrl = "https://fonts.googleapis.com";
    const fontStaticUrl = "https://fonts.gstatic.com";
    const fontPath = `css2?family=Zen+Maru+Gothic:wght@300;400;500;700&display=swap`;
    const fontUrl = `${fontBaseUrl}/${fontPath}`;

    return (
      <Html>
        <Head>
          <link rel="preconnect" href={fontBaseUrl} />
          <link rel="preconnect" href={fontStaticUrl} crossOrigin="true" />
          <link href={fontUrl} rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
