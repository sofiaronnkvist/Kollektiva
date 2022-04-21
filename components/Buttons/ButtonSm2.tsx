import Link from 'next/link'

function ButtonSm2(props: any) {
  return (
    <Link href={props.link}>
      <button className="z-10 h-[52px] w-[185px] rounded-full border border-indigo-700 bg-indigo-100 text-[24px] text-indigo-900">
        {props.text}
      </button>
    </Link>
  )
}

export default ButtonSm2
