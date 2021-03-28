import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            src="https://rvz.hagever.com/widget.js?id=6c008929-673b-4846-9611-8bb2215df6d1"
            type="module"
            id="reviewerz-script"
            defer
            cross-origin
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
