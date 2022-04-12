import Image from 'next/image'

function QuestionMark() {
  return (
    <div className="mt-[154px] mr-[162px] flex justify-end">
      <Image
        src="/questionmark.svg"
        alt="Hur gör jag här?"
        width="72"
        height="72"
      />
    </div>
  )
}

export default QuestionMark
