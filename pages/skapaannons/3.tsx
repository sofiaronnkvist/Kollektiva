import React from 'react'
import LoginHeader from '../../components/LoginHeader'
import ButtonSm2 from '../../components/Buttons/ButtonSm2'
import QuestionMark from '../../components/QuestionMark'
import Link from 'next/link'
import ButtonSm from '../../components/Buttons/ButtonSm'

function SkapaAnnons1() {
  return (
    <div>
      <LoginHeader add="Spara och " link="/profil" />
      <div className="container mx-auto mt-[50px] flex items-center justify-center bg-white">
        <div className="w-[548px]">
          <h1 className="mb-[24px] text-[36px] text-indigo-800">
            Vilken adress har bostaden?
          </h1>
          <h2 className="mb-[12px] text-[20px] text-indigo-800 ">Gata</h2>
          <input
            type="text"
            placeholder="Vad är bostadens gatuaddress?"
            className="h-[52px] w-[548px] rounded border border-indigo-900 px-[20px]"
          />
          <h2 className="my-[24px] mb-[12px] text-[20px] text-indigo-800">
            Postnummer
          </h2>
          <input
            type="text"
            placeholder="Vad är bostadens postnummer?"
            className="h-[52px] w-[548px] rounded border border-indigo-900 px-[20px]"
          />
          <h2 className="my-[24px] mb-[12px] text-[20px] text-indigo-800 ">
            Stad
          </h2>
          <input
            type="text"
            placeholder="Vilken stad ligger bostaden i?"
            className="h-[52px] w-[548px] rounded border border-indigo-900 px-[20px]"
          />
          <div className="mt-[120px] flex items-center justify-between">
            <ButtonSm2 text="Tillbaka" link="/skapaannons/2" />
            <p className="text-[20px] text-indigo-700">3/9</p>
            <ButtonSm text="Nästa" link="/skapaannons/4" />
          </div>
        </div>
      </div>
      <QuestionMark />
    </div>
  )
}

export default SkapaAnnons1
