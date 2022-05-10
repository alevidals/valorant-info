import { NextPage } from 'next'
import Link from 'next/link'

interface Props {
  href: string
  active: boolean
  text: string
}

const NavbarLink: NextPage<Props> = ({ href, active, text }) => {
  return (
    <Link href={href}>
      <a className={`${active ? ' active-link' : ''}`}>{text}</a>
    </Link>
  )
}

export default NavbarLink
