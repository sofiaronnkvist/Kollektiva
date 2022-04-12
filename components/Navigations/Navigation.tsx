import Link from 'next/link'
import Logo from '../Logo'

function Navigation() {
  return (
    <ul className="flex items-baseline justify-between px-8 py-8">
      <li className="mr-6">
        <Link href="/">
          <Logo></Logo>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-800">Så funkar det</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/loggain">
          <a className="text-blue-500 hover:text-blue-800">Logga in</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/blimedlem">
          <a className="text-blue-500 hover:text-blue-800">Bli medlem</a>
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
