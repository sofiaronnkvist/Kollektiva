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
          <h1 className="mb-[24px] text-[36px] text-indigo-800">
            Vilket typ av boende vill du hyra ut?
          </h1>
          <h2 className="text-[20px] text-indigo-800">
            Vilket typ av bostad hyr du ut?
          </h2>
          <div className="my-[24px] flex justify-between">
            <button className="choice-button">Villa</button>
            <button className="choice-button">Lägenhet</button>
            <button className="choice-button">Attefallshus</button>
            <button className="choice-button">Stuga</button>
          </div>
          <h2 className="my-[24px] text-[20px] text-indigo-800">
            Vill du hyra hela bostaden eller ett rum i bostaden?
          </h2>
          <div className="flex">
            <button className="choice-button mr-6">Hela bostaden</button>
            <button className="choice-button">Rum i bostaden</button>
          </div>
          <h2 className="my-[24px] text-[20px] text-indigo-800">
            Hyr du ut möblerat?
          </h2>
          <div className="mb-[80px] flex">
            <button className="choice-button mr-6">Möblerat</button>
            <button className="choice-button">Omöblerat</button>
          </div>
          <div className="flex items-center justify-between">
            <ButtonSm2 text="Tillbaka" link="/skapaannons/1" />
            <p className="text-[20px] text-indigo-700">1/9</p>
            <ButtonSm text="Nästa" link="/skapaannons/2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkapaAnnons1
