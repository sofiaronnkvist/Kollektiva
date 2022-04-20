import React from 'react'
import ButtonLg from '../../components/Buttons/ButtonLg'
import LoginHeader from '../../components/LoginHeader'
import Link from 'next/link'
import Image from 'next/image'

function Publicera() {
  return (
    <div>
      <LoginHeader />
      <div>
        <div className="container mx-auto mt-[50px] flex items-center justify-center bg-white">
          <div className="w-[548px]">
            <h1 className="mb-[24px] text-[36px] text-indigo-800">
              Nu är din annons snart uppe!
            </h1>
            <p className="mb-[40px] text-[24px]">
              Några saker som är bra att veta: Följ alltid lokala lagar och glöm
              inte att granska de policys som gäller för Kollektiva.
            </p>
            <Link href="/skapaannons/1">
              <button className="h-[72px] w-[454px] rounded-full bg-indigo-500 text-[24px] text-white">
                Granska och publicera
              </button>
            </Link>
            <Link href="/skapaannons/1">
              <button className="h-[72px] w-[454px] rounded-full bg-indigo-500 text-[24px] text-white">
                Tillbaka
              </button>
            </Link>
          </div>
          <div className="relative overflow-hidden">
            <Image
              className="h-full w-full"
              src="/video.png"
              alt="test"
              width="548"
              height="574"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publicera
