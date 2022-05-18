import { NextPage } from 'next'
import { AgentData } from '../interfaces/Agents'
import AgentCard from './AgentCard'

interface Props {
  agents: AgentData[]
}

const AgentsGrid: NextPage<Props> = ({ agents }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-5'>
      {agents.map((agent) => (
        <AgentCard agent={agent} />
      ))}
    </div>
  )
}

export default AgentsGrid
