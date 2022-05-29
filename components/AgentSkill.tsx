import { NextPage } from 'next'
import Image from 'next/image'
import { Ability } from '../interfaces/Agents'

interface Props {
  skill: Ability
}

const AgentSkill: NextPage<Props> = ({ skill }) => {
  return (
    <div key={skill.slot} className='flex'>
      <div className='pr-10 flex-shrink-0'>
        <Image src={skill.displayIcon} height={50} width={50} />
      </div>
      <div className='dark:text-gray-300'>
        <h2 className='text-xl font-medium uppercase'>{skill.displayName}</h2>
        <p className='font-light'>{skill.description}</p>
      </div>
    </div>
  )
}

export default AgentSkill
