import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NavbarLink from './NavBarLink'

// interface Props {
//   router: NextRouter
// }

const Navbar: NextPage = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`py-2.5 pb-10 z-30 rounded fixed top-0 right-0 left-0 duration-500 ${
        isScrolled || navbarOpen ? 'bg-dark_accent' : 'bg-transparent'
      }`}
    >
      <div className='custom-container flex justify-between items-center flex-wrap'>
        <Link href='/'>
          <a className='text-3xl' onClick={() => setNavbarOpen(false)}>
            <Image src='/logo.png' alt='logo' width={50} height={50} />
          </a>
        </Link>
        <button
          type='button'
          className='text-valorant rounded-lg md:hidden outline-none'
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className={'w-6 h-6' + (!navbarOpen ? '' : ' hidden')}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
          <svg
            className={'w-6 h-6' + (navbarOpen ? '' : ' hidden')}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
        <div
          className={` w-full md:w-auto md:flex items-center${
            navbarOpen ? ' block' : ' hidden'
          }`}
        >
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium dark:text-gray-200 space-y-2 md:space-y-0'>
            <li onClick={() => setNavbarOpen(false)}>
              <NavbarLink href='/' text='Home' active={router.asPath === '/'} />
            </li>
            <li onClick={() => setNavbarOpen(false)}>
              <NavbarLink
                href='/agents'
                text='Agents'
                active={router.asPath === '/agents'}
              />
            </li>
            <li onClick={() => setNavbarOpen(false)}>
              <NavbarLink
                href='/weapons'
                text='Weapons'
                active={router.asPath === '/weapons'}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
