import React from 'react'
import LoginHeader from '../../components/LoginHeader'
import ButtonSm2 from '../../components/Buttons/ButtonSm2'
import QuestionMark from '../../components/QuestionMark'
import Link from 'next/link'
import ButtonSm from '../../components/Buttons/ButtonSm'

function SkapaAnnons1() {
  return (
    <div>
      <LoginHeader />
      <div className="container mx-auto mt-[32px] flex items-center justify-center bg-white">
        <div className="w-[630px]">
          <h1 className="mb-[24px] text-[36px] text-indigo-800">
            Vad söker du hos den perfekta hyresgästen?
          </h1>
          <h2 className="mb-[24px] text-[20px]  text-gray-500">
            För att skapa matchningar och ge dig de bästa alternativen på
            hyresgäster kan du klicka i vad som känns viktigt för dig hos en
            hyresgäst.
          </h2>
          <div>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Ej rökare
            </button>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Ordningsam
            </button>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Vattnar gärna
            </button>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Ensamvarg
            </button>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Schackspelare
            </button>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Social
            </button>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Djurvän
            </button>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Borta mycket
            </button>
          </div>
          <h2 className="my-[24px] mb-[12px] text-[20px] text-indigo-800 ">
            Lägg till annat
          </h2>
          <h2 className="mb-[8px] text-[20px]  text-gray-500">
            Du kan lägga till flera alternativ. Klicka på Enter för att lägga
            till.
          </h2>
          <input
            type="text"
            placeholder="exempel: Student"
            className="h-[52px] w-[548px] rounded border border-indigo-900 px-[20px]"
          />

          <div className="mt-[32px] flex items-center justify-between">
            <ButtonSm2 text="Tillbaka" link="/skapaannons/7" />
            <p className="text-[20px] text-indigo-700">8/9</p>
            <ButtonSm text="Nästa" link="/skapaannons/9" />
          </div>
        </div>
      </div>
      <QuestionMark />
    </div>
  )
}

export default SkapaAnnons1
