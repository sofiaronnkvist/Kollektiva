import React from 'react'
import LoginHeader from '../../components/LoginHeader'
import ButtonSm2 from '../../components/Buttons/ButtonSm2'
import QuestionMark from '../../components/QuestionMark'
import Link from 'next/link'
import ButtonSm from '../../components/Buttons/ButtonSm'
import Image from 'next/image'

function SkapaAnnons1() {
  return (
    <div>
      <LoginHeader />
      <div className="container mx-auto mt-[50px] flex items-center justify-center bg-white">
        <div className="w-[548px]">
          <h1 className="mb-[24px] text-[36px] text-indigo-800">
            Dags att lägga upp bilder på boendet!
          </h1>
          <h2 className="mb-[24px] text-[20px]  text-gray-500">
            Ladda upp minst fem bilder, men gärna fler. Detta är för att de
            boendesökande ska få en tydlig bild över bostaden och omgivningarna.
          </h2>
          <div className="flex h-[224px] w-[548px] flex-col items-center justify-center rounded border border-indigo-900">
            <p className="mb-[25px] text-[18px]">
              Dra bilder hit eller klicka på ladda upp
            </p>
            <div className="flex">
              <Image src="/upload.svg" width="24" height="24"></Image>
              <p className="ml-[10px] text-[20px] text-indigo-800">Ladda upp</p>
            </div>
          </div>

          <div className="mt-[48px] flex items-center justify-between">
            <ButtonSm2 text="Tillbaka" link="/skapaannons/6" />
            <p className="text-[20px] text-indigo-700">7/9</p>
            <ButtonSm text="Nästa" link="/skapaannons/8" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkapaAnnons1
