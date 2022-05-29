import { NextPage } from 'next'
import Image from 'next/image'
import { Ability } from '../interfaces/Agents'
import AgentSkill from './AgentSkill'

interface Props {
  skills: Ability[]
}

const AgentSkills: NextPage<Props> = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => (
        <AgentSkill skill={skill} key={skill.slot} />
      ))}
    </>
  )
}
export default AgentSkills
