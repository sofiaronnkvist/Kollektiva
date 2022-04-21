import Image from 'next/image'
import Logo from '../Logo'
import Link from 'next/link'

function LoginHeader(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between px-[192px]">
        <Logo />
        <Link href={props.link}>
          <div className="my-[34px] flex items-center text-[18px] text-indigo-500">
            {props.add}Stäng <div className="text-white">..</div>
            <Image
              src="/closeicon.png"
              alt="close icon"
              width="20"
              height="20"
            />
          </div>
        </Link>
      </div>
      <hr />
    </div>
  )
}

export default LoginHeader
