import { NextPage } from 'next'
import Head from 'next/head'

interface Props {
  children: React.ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className='bg-red-200 dark:bg-slate-900'>
      <Head>
        <title>Valorant Info</title>
        <meta name='description' content='Valorant info page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Header /> */}
      <main className='container mx-auto min-h-screen'>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
