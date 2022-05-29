import { NextPage } from 'next'
import Image from 'next/image'
import { AgentData } from '../interfaces/Agents'
import AgentSkills from './AgentSkills'

interface Props {
  agent: AgentData
}

const AgentInfo: NextPage<Props> = ({ agent }) => {
  return (
    <div className='items-center justify-center px-5 xl:flex'>
      <div className='flex-shrink-0'>
        <Image
          src={agent.fullPortraitV2}
          height={700}
          width={700}
          alt={agent.displayName}
        />
      </div>
      <div className='space-y-5 '>
        <div>
          <div className='flex items-end'>
            <h1 className='mr-1 text-5xl dark:text-gray-300'>
              {agent.displayName}
            </h1>
            <Image
              src={agent.role.displayIcon}
              height={15}
              width={15}
              alt={agent.role.displayName}
              title={agent.role.displayName}
            />
          </div>
          <p className='mt-1 font-light	 dark:text-gray-400'>
            {agent.description}
          </p>
        </div>
        <audio controls src={agent.voiceLine.mediaList[0].wave}></audio>
        <AgentSkills skills={agent.abilities} />
      </div>
    </div>
  )
}

export default AgentInfo
