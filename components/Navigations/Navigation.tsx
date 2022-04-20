import Link from 'next/link'
import Logo from '../Logo'
import Image from 'next/image'

function Navigation() {
  return (
    <div>
      <ul className="flex items-baseline justify-between px-8 py-8">
        <li className="ml-[50px]">
          <Link href="/">
            <Logo></Logo>
          </Link>
        </li>
        <div className="flex items-center">
          <li className="mr-[32px] flex items-center">
            <div className="m-[10px] flex items-center">
              <Image src="/info.svg" width="20" height="20"></Image>
            </div>
            <Link href="/">
              <a className="text-black hover:text-blue-800">Så funkar det</a>
            </Link>
          </li>
          <li className="mr-[32px]">
            <Link href="/loggain">
              <a className="text-black hover:text-blue-800">Logga in</a>
            </Link>
          </li>
          <li className="mr-[70px]">
            <Link href="/blimedlem">
              <div className="flex h-[48px] w-[150px] items-center justify-center rounded-full bg-indigo-500 hover:bg-indigo-700">
                <a className="text-white">Bli medlem</a>
              </div>
            </Link>
          </li>
        </div>
      </ul>
      <hr className="mb-[40px]" />
    </div>
  )
}

export default Navigation
