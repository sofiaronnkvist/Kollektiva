import React from 'react'
import ButtonLg from '../../components/Buttons/ButtonLg'
import LoginHeader from '../../components/LoginHeader'
import Link from 'next/link'
import Image from 'next/image'

function SkapaAnnons() {
  return (
    <div>
      <LoginHeader link="/profil" />
      <div>
        <div className="container mx-auto mt-[50px] flex items-center justify-center bg-white">
          <div className="w-[548px]">
            <div className="mr-[20px]">
              <h1 className="mb-[24px] text-[36px] text-indigo-800">
                Hej Marianne! <br />
                Det är enkelt att bli hyresvärd.
              </h1>
              <p className="mb-[40px] text-[24px]">
                Till höger ser du en video som förklarar hur det går till. När
                du är redo klickar du på sätt igång!
              </p>
            </div>
            <Link href="/skapaannons/1">
              <button className="h-[72px] w-[454px] rounded-full bg-indigo-500 text-[24px] text-white">
                Sätt igång
              </button>
            </Link>
          </div>
          <Link href="/skapaannons/video">
            <div className="flex max-h-[574px] max-w-[548px]">
              <img
                className="rounded-3xl object-cover"
                src="/video-bild.png"
                alt="Linköping"
              />
              <button className="absolute h-[32px] w-[124px] translate-y-[250px] translate-x-[200px]">
                <Image src="/play-button.svg" width="77" height="99" />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SkapaAnnons
