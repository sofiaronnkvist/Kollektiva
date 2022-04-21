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
        <div className="w-[600px]">
          <h1 className="mb-[24px] text-[36px] text-indigo-800">
            Vad gör ditt boende till något extra?
          </h1>
          <h2 className="mb-[24px] text-[20px]  text-gray-500">
            Välj de bekvämligheter som stämmer in. Du kan lägga till egna
            fördelar med bostaden.
          </h2>
          <div>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Balkong/Uteplats
            </button>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Internet
            </button>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Badkar
            </button>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Grill
            </button>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Hemmagym
            </button>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Sällskapsspel
            </button>
            <button className="choice-button mb-[10px] mr-[10px] text-[18px]">
              Rullstolsanpassat
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
            placeholder="exempel: Biljardbord"
            className="h-[52px] w-[548px] rounded border border-indigo-900 px-[20px]"
          />

          <div className="mt-[32px] flex items-center justify-between">
            <ButtonSm2 text="Tillbaka" link="/skapaannons/5" />
            <p className="text-[20px] text-indigo-700">6/9</p>
            <ButtonSm text="Nästa" link="/skapaannons/7" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkapaAnnons1
