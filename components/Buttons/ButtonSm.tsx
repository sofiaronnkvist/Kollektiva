import Link from 'next/link'

function ButtonSm(props: any) {
  return (
    <Link href={props.link}>
      <button className="z-10 h-[52px] w-[185px] rounded-full bg-indigo-500 text-[24px] text-white">
        {props.text}
      </button>
    </Link>
  )
}

export default ButtonSm
