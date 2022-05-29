import { GetStaticProps } from 'next'
import WeaponsGrid from '../../components/WeaponsGrid'
import { Weapon } from '../../interfaces/Weapons'

interface Props {
  weapons: Weapon[]
}

const Weapons = ({ weapons }: Props) => {
  return (
    <div className='custom-container p-nav'>
      <h1 className='uppercase text-4xl font-extrabold text-center dark:text-gray-200'>
        Weapons
      </h1>
      <WeaponsGrid weapons={weapons} />
    </div>
  )
}

interface ResponseType {
  status: number
  data: Weapon[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://valorant-api.com/v1/weapons')
  const response: ResponseType = await res.json()

  return {
    props: {
      weapons: response.data,
    },
  }
}

export default Weapons
