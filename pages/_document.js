import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>
      <noscript>
        <iframe src="https://tortenworx-noscript.tortensama.repl.co"
                frameBorder="0"
                style={{
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    border: "none",
                    margin: 0,
                    padding: 0,
                    overflow: "hidden",
                    zIndex: 999999
                }}>

                </iframe>
        </noscript>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
