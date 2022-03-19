import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    const googleFontBaseUrl = "https://fonts.googleapis.com";
    const zenMaruGothicPath = `css2?family=Zen+Maru+Gothic:wght@300&display=swap`;
    const zenMaruGothicUrl = `${googleFontBaseUrl}/${zenMaruGothicPath}`;
    return (
      <Html>
        <Head>
          <link rel="preconnect" href={googleFontBaseUrl} />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href={zenMaruGothicUrl} rel="stylesheet" />
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
