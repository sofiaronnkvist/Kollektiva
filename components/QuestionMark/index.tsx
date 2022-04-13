import Image from 'next/image'

function QuestionMark() {
  return (
    <div className="fixed bottom-0 flex w-full justify-end pr-[192px] pb-[72px]">
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
