import Image from 'next/image'
import Link from 'next/link'
import { Weapon } from '../interfaces/Weapons'

interface Props {
  weapon: Weapon
}

const WeaponCard = ({ weapon }: Props) => {
  return (
    <Link
      href={{
        pathname: '/weapons/[name]',
        query: {
          uuid: weapon.uuid,
        },
      }}
      as={`/weapons/${weapon.displayName.toLowerCase()}`}
      className='bg-dark_accent flex items-center justify-center px-5 py-10 rounded-md relative group cursor-pointer'
    >
      <a className='bg-dark_accent flex items-center justify-center px-5 py-10 rounded-md relative group cursor-pointer'>
        <h2 className='absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2  group-hover:flex text-2xl text-gray-200 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
          {weapon.displayName}
        </h2>
        <Image
          className='group-hover:opacity-40 group-hover:scale-110 ease-in-out transition duration-300 group-hover:grayscale'
          src={weapon.displayIcon}
          alt={weapon.uuid}
          height={124}
          width={512}
          objectFit='contain'
        />
      </a>
    </Link>
  )
}

export default WeaponCard
