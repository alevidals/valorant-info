import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface Cards {
  title: string
  href: string
  description: string
  image?: string
}

const Home: NextPage = () => {
  const cards: Cards[] = [
    {
      href: '/agents',
      title: 'agents',
      description: 'Data about the agents of the game',
    },
    {
      href: '/weapons',
      title: 'weapons',
      description: 'Data about the weapons of the game',
    },
  ]

  return (
    <div>
      <div className='bg-hero-pattern bg-cover relative'>
        <div className='flex items-center min-h-screen cover custom-container flex-col md:flex-row justify-center md:justify-between'>
          <div className='dark:text-gray-200 space-y-2 md:space-y-6 text-center md:text-left'>
            <h1 className='text-2xl md:text-6xl font-bold'>
              Welcome to Valorant Info
            </h1>
            <h2 className='text-lg md:text-xl'>
              A page for information about Valorant
            </h2>
          </div>
          <Image src='/big_logo.png' alt='logo' width={450} height={450} />
        </div>
      </div>
      <div className='custom-container min-h-screen pt-32 dark:text-gray-200'>
        <h2 className='uppercase text-3xl font-extrabold underline underline-offset-[15px] decoration-3 text-center'>
          Content
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-20'>
          {cards.map((card) => (
            <Link href={card.href} key={card.href}>
              <a>
                <div className='flex flex-col justify-center items-center space-y-4 bg-dark_accent py-20 rounded-md hover:bg-[#16202E] transition duration-300 ease-in-out hover:scale-105 group'>
                  <h2 className='capitalize text-2xl font-bold group-hover:text-valorant'>
                    {card.title}
                  </h2>
                  <p className='text-sm font-light text-center px-3'>
                    {card.description}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
