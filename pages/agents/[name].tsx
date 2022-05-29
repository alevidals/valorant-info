import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import AgentInfo from '../../components/AgentInfo'
import { AgentData } from '../../interfaces/Agents'

interface Props {
  agent: AgentData
  status: number
}

const Agent: NextPage<Props> = ({ agent, status }) => {
  return (
    <div className='p-nav custom-container min-h-screen flex justify-center items-center'>
      <AgentInfo agent={agent} />
    </div>
  )
}

export default Agent

interface ResponseType {
  status: number
  data: AgentData[]
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(`https://valorant-api.com/v1/agents/${query.uuid}`)
  const response: ResponseType = await res.json()
  return {
    props: {
      agent: response.data,
      status: response.status,
    },
  }
}
