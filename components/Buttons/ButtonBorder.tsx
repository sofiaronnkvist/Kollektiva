function ButtonBorder(props: any) {
  return (
    <button className="h-[52px] rounded-full border border-indigo-700 bg-indigo-100 px-[30px] text-[24px] text-black">
      {props.text}
    </button>
  )
}

export default ButtonBorder
