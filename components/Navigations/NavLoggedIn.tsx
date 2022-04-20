import Link from 'next/link'
import Logo from '../Logo'
import Image from 'next/image'

function NavLoggedIn(props: any) {
  return (
    <div>
      <ul className="flex items-baseline justify-between px-8 py-4">
        <li className="ml-[50px]">
          <Link href="/">
            <Logo></Logo>
          </Link>
        </li>
        <div className="flex items-center">
          <li className="mr-[34px] flex items-center">
            <div className="m-[10px] flex items-center">
              <Image src="/home.svg" width="20" height="20"></Image>
            </div>
            <Link href="/">
              <a className="text-black hover:text-blue-800">Startsida</a>
            </Link>
          </li>
          <li className="mr-[34px] flex items-center">
            <div className="m-[10px] flex items-center">
              <Image src="/edit.svg" width="20" height="20"></Image>
            </div>
            <Link href="/">
              <a className="text-black hover:text-blue-800">Ny annons</a>
            </Link>
          </li>
          <li className="mr-[34px] flex items-center">
            <div className="m-[10px] flex items-center">
              <Image src="/info.svg" width="20" height="20"></Image>
            </div>
            <Link href="/">
              <a className="text-black hover:text-blue-800">Så funkar det</a>
            </Link>
          </li>
          <li className="mr-[50px] flex items-center">
            <div className="m-[10px] flex items-center">
              <Image src="/user-check.svg" width="20" height="20"></Image>
            </div>
            <Link href="/">
              <a className="text-indigo-700 hover:text-blue-800">
                {props.name}
              </a>
            </Link>
          </li>
        </div>
      </ul>
      <hr />
    </div>
  )
}

export default NavLoggedIn
