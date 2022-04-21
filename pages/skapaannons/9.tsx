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
            Rekommenderad hyra baserat på liknande boenden i ditt område
          </h1>
          <h2 className="mb-[24px] text-[20px]  text-gray-500">
            Baserat på informationen vi fått av dig och av uthyrningar i ditt
            närområde rekommenderar vi en hyra på mellan{' '}
            <span className="text-indigo-800">7 500- 8 500 SEK</span> per månad.
          </h2>
          <div className="flex justify-center">
            <div>
              <h2 className="my-[24px] mb-[12px] text-[20px] text-indigo-800">
                Fyll i din hyra nedan:
              </h2>
              <div className="flex items-center">
                <input
                  type="text"
                  className="h-[52px] w-[200px] rounded border border-indigo-900 p-[20px]"
                />
                <p className="ml-[12px] text-[20px] text-[18px] text-indigo-800">
                  SEK
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[100px] flex items-center justify-between">
            <ButtonSm2 text="Tillbaka" link="/skapaannons/8" />
            <p className="text-[20px] text-indigo-700">9/9</p>
            <ButtonSm text="Nästa" link="/skapaannons/publicera" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkapaAnnons1
