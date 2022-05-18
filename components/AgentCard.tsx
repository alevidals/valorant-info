import { NextPage } from 'next'
import Image from 'next/image'
import { AgentData } from '../interfaces/Agents'

interface Props {
  agent: AgentData
}

const AgentCard: NextPage<Props> = ({ agent }) => {
  return (
    <div
      className='bg-dark_accent flex items-center justify-center px-5 py-10 rounded-md relative group cursor-pointer'
      key={agent.uuid}
    >
      <h2 className='absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2  group-hover:flex text-2xl text-gray-200 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
        {agent.displayName}
      </h2>
      <Image
        className='group-hover:opacity-40 group-hover:scale-110 ease-in-out transition duration-300 group-hover:grayscale'
        src={agent.fullPortrait}
        alt={agent.uuid}
        height={1000}
        width={1000}
      />
    </div>
  )
}

export default AgentCard
