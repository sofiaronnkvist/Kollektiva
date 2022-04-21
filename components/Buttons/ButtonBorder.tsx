function ButtonBorder(props: any) {
  return (
    <button className="my-[8px] mx-[2px] h-[52px] cursor-default rounded-full border  border-indigo-500 px-[30px] text-[18px] text-black">
      {props.text}
    </button>
  )
}

export default ButtonBorder
