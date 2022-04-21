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
      <div className="container mx-auto mt-[50px] flex items-center justify-center bg-white">
        <div className="w-[548px]">
          <h1 className="mb-[48px] text-[36px] text-indigo-800">
            Beskriv i text vad ditt boende har att erbjuda
          </h1>
          <h2 className="mb-[8px] text-[20px]  text-gray-500">
            Skriv en text om ditt boende
          </h2>
          <textarea
            placeholder="exempel: En trevlig stuga med en luftig fin altan med sjöutsikt"
            className="h-[170px] w-[548px] rounded border border-indigo-900 p-[20px] text-[18px]"
          />

          <div className="mt-[130px] flex items-center justify-between">
            <ButtonSm2 text="Tillbaka" link="/skapaannons/4" />
            <p className="text-[20px] text-indigo-700">5/9</p>
            <ButtonSm text="Nästa" link="/skapaannons/6" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkapaAnnons1
