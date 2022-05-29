import { Weapon } from '../interfaces/Weapons'
import WeaponCard from './WeaponCard'

interface Props {
  weapons: Weapon[]
}

const WeaponsGrid = ({ weapons }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-5'>
      {weapons.map((weapon) => (
        <WeaponCard weapon={weapon} key={weapon.uuid} />
      ))}
    </div>
  )
}

export default WeaponsGrid
