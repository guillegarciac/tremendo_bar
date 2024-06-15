import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { useTranslation } from 'next-i18next';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx.query.locale || 'ca' }; // Default to 'ca' if no locale is provided
  }

  render() {
    const { locale } = this.props as any; // Use locale from props

    return (
      <Html lang={locale}>
        <Head>
          {/* Preconnect to Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          {/* Import Google Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Monoton&family=Bebas+Neue&family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" />
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