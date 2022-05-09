import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ReactElement } from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): ReactElement {
    return (
      <Html lang='en' className='dark'>
        <Head />
        <Main />
        <NextScript />
      </Html>
    )
  }
}

export default MyDocument
