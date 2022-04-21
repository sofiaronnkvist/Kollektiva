import React from 'react'
import LoginHeader from '../../components/LoginHeader'
import ButtonSm2 from '../../components/Buttons/ButtonSm2'
import QuestionMark from '../../components/QuestionMark'
import Link from 'next/link'
import Image from 'next/image'
import ButtonSm from '../../components/Buttons/ButtonSm'

function SkapaAnnons1() {
  return (
    <div>
      <LoginHeader />
      <div className="container mx-auto mt-[50px] flex items-center justify-center bg-white">
        <div>
          <div className="flex items-center">
            <div className="mr-[86px] w-[453px]">
              <h1 className="mb-[24px] text-[36px] text-indigo-800">
                Är markören på rätt ställe?
              </h1>
              <h2 className="text-[24px] text-indigo-800">
                Justera markören så att den visar var bostaden ligger.
              </h2>
              <p className="text-[20px]">
                För att justera flyttar du på kartans position, markören ligger
                alltid i kartans mitt.
              </p>
            </div>
            <Image src="/map.png" width="547" height="404"></Image>
          </div>
          <div className="mt-[100px] flex items-center justify-between">
            <ButtonSm2 text="Tillbaka" link="/skapaannons/3" />
            <p className="text-[20px] text-indigo-700">4/9</p>
            <ButtonSm text="Nästa" link="/skapaannons/5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkapaAnnons1
