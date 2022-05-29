import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { Chroma, Weapon } from '../../interfaces/Weapons'

interface Props {
  weapon: Weapon
  status: number
}

const Weapon = ({ weapon, status }: Props) => {
  const [selectedChroma, setSelectedChroma] = useState<Chroma[]>()
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        <div className='flex space-x-5 overflow-scroll scrollbar-hide'>
          {weapon.skins
            .filter(
              (skin) =>
                skin.displayIcon &&
                !skin.displayName.includes('Standard') &&
                !skin.displayName.includes('Luxe')
            )
            .map((skin) => (
              <div
                key={skin.uuid}
                className='bg-dark_accent p-5 rounded-md hover:scale-105 duration-200 transform cursor-pointer'
                onClick={() => {
                  setSelectedChroma(skin.chromas.filter((c) => c.displayIcon))
                  setIsModalOpen(true)
                }}
              >
                <div className='relative h-32 w-96' key={skin.uuid}>
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

      {isModalOpen && (
        <div
          className='fixed z-30 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center p-5 md:p-20'
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className='w-full mx-auto bg-dark p-10 rounded-sm h-full overflow-scroll scrollbar-hide'
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='dark:text-gray-300 text-3xl mb-10'>Chromas</h2>
            <div>
              {selectedChroma?.length ? (
                <div className='space-y-10'>
                  {selectedChroma
                    .filter((chroma) => chroma.displayIcon)
                    .map((chroma) => (
                      <div className='' key={chroma.uuid}>
                        <h4 className='text-lg dark:text-gray-300'>
                          {chroma.displayName}
                        </h4>
                        <div className='relative h-32 w-50 md:w-96'>
                          <Image
                            src={chroma.displayIcon}
                            layout='fill'
                            objectFit='contain'
                            alt={chroma.displayName}
                            title={chroma.displayName}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <h3 className='dark:text-gray-300 text-xl mb-10'>
                  This skins haven&apos;t chromas
                </h3>
              )}
            </div>
          </div>
        </div>
      )}
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
