import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './Navbar'

interface Props {
  children: React.ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className='bg-red-200 dark:bg-dark'>
      <Head>
        <title>Valorant Info</title>
        <meta name='description' content='Valorant info page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='min-h-screen'>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
