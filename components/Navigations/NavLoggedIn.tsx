import Link from 'next/link'
import Logo from '../Logo'

function NavLoggedIn(props: any) {
  return (
    <ul className="flex items-baseline justify-between px-8 py-8">
      <li className="mr-6">
        <Link href="/">
          <Logo></Logo>
        </Link>
      </li>
      <div className="flex">
        <li className="mr-6">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-800">Startsida</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-800">Ny annons</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-800">Så funkar det</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-800">{props.name}</a>
          </Link>
        </li>
      </div>
    </ul>
  )
}

export default NavLoggedIn
