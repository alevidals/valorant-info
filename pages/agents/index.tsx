import { GetStaticProps, NextPage } from 'next'
import AgentsGrid from '../../components/AgentsGrid'
import { AgentData } from '../../interfaces/Agents'

interface Props {
  agents: AgentData[]
}

const Agents: NextPage<Props> = ({ agents }) => {
  return (
    <div className='custom-container min-h-screen py-20'>
      <h1 className='uppercase text-4xl font-extrabold text-center dark:text-gray-200'>
        Agents
      </h1>
      <AgentsGrid agents={agents} />
    </div>
  )
}

interface ResponseType {
  status: number
  data: AgentData[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://valorant-api.com/v1/agents')
  const response: ResponseType = await res.json()

  return {
    props: {
      agents: response.data.filter((agent) => agent.isPlayableCharacter),
      status: response.status,
    },
  }
}

export default Agents
