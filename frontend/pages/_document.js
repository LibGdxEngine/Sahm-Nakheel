import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar">
        <Head>
          {/* <link rel="shortcut icon" href="/images/letaskono_logo.png" /> */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
          ></link>

          <link
            rel="stylesheet"
            href="https://atfawry.fawrystaging.com/atfawry/plugin/assets/payments/css/fawrypay-payments.css"
          ></link>

          <script
            type="text/javascript"
            src="https://atfawry.fawrystaging.com/atfawry/plugin/assets/payments/js/fawrypay-payments.js"
          ></script>

          <script
            type="text/javascript"
            src="https://www.atfawry.com/atfawry/plugin/assets/payments/js/fawrypay-payments.js"
          ></script>
          <mate charSet="UTF-8" />
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
