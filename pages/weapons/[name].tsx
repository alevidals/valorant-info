import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { Chroma, Weapon } from '../../interfaces/Weapons'

interface Props {
  weapon: Weapon
  status: number
}

const Weapon = ({ weapon, status }: Props) => {
  return (
    <div className='p-nav custom-container'>
      <h1 className='text-5xl dark:text-gray-300'>{weapon.displayName}</h1>
      <div className='relative h-32 w-80 mt-10'>
        <Image
          src={weapon.displayIcon}
          layout='fill'
          objectFit='contain'
          alt={weapon.displayName}
          title={weapon.displayName}
        />
      </div>
      {weapon.weaponStats && (
        <section className='dark:text-gray-300 mt-10'>
          <h2 className='text-3xl'>Weapon stats</h2>
          <ul>
            <li>Fire rate: {weapon.weaponStats?.fireRate}</li>
            <li>Reload time: {weapon.weaponStats?.reloadTimeSeconds}</li>
            <li>Equip time seconds: {weapon.weaponStats?.equipTimeSeconds}</li>
            <li>Cost: {weapon.shopData?.cost}</li>
            <li>Category: {weapon.shopData?.category}</li>
          </ul>
        </section>
      )}

      <section className='dark:text-gray-300 mt-10'>
        <h2 className='text-3xl mb-5'>Weapon skins</h2>
        <div className='flex space-x-24 overflow-scroll scrollbar-hide'>
          {weapon.skins
            .filter(
              (skin) =>
                skin.displayIcon &&
                !skin.displayName.includes('Standard') &&
                !skin.displayName.includes('Luxe')
            )
            .map((skin, index) => (
              <div key={skin.uuid}>
                <div className=' relative h-32 w-96' key={skin.uuid}>
                  <Image
                    src={skin.displayIcon}
                    layout='fill'
                    objectFit='contain'
                    alt={skin.displayName}
                    title={skin.displayName}
                  />
                </div>
                <h3 className='text-xl mt-10 text-center'>
                  {skin.displayName}
                </h3>
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default Weapon

interface ResponseType {
  status: number
  data: Weapon[]
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(`https://valorant-api.com/v1/weapons/${query.uuid}`)
  const response: ResponseType = await res.json()

  return {
    props: {
      weapon: response.data,
      status: response.status,
    },
  }
}
