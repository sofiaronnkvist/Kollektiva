import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLoggedIn from '../../components/Navigations/NavLoggedIn'
import ButtonBorder from '../../components/Buttons/ButtonBorder'

function RumUthyres() {
  return (
    <div>
      <NavLoggedIn name="Marianne W" />
      <div className="flex justify-center">
        <div className="mr-[20px] w-[548px]">
          <Image src="/rumuthyres1.jpg" width="548" height="352" />
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          <Image src="/rumuthyres1.jpg" width="262" height="164" />
          <Image src="/rumuthyres1.jpg" width="262" height="164" />
          <Image src="/rumuthyres1.jpg" width="262" height="164" />
          <Image src="/rumuthyres1.jpg" width="262" height="164" />
        </div>
      </div>
      <div className="my-[24px] flex justify-center">
        <div className="mr-[212px] w-[548px]">
          <h1 className="my-[24px] text-5xl font-bold ">Rum uthyres</h1>
          <h3 className="text-xl">Rum i villa • 1 rum • 15 m3</h3>
          <p className="my-[24px] text-lg text-gray-600">
            Rymligt rum i enplans-villa i lugnt område i Linköping uthyres. Du
            som hyr får dela kök med mig Marianne men du får tillgång till ett
            eget badrum. Internet och härlig trädgård att vistas i finns. Jag
            ser gärna att en student hyr då det är trevligt med intellektuella
            samtal. Katt finns i hemmet (Måns).
          </p>
          <h3 className="mb-[24px] text-xl">Detta boendet erbjuder </h3>
          <ul className="mb-[36px]">
            <li className="flex">
              <Image src="/check.svg" width="16" height="11"></Image>
              <p className="mx-[10px]">Wifi</p>
            </li>
            <li className="flex">
              <Image src="/check.svg" width="16" height="11"></Image>
              <p className="mx-[10px]">Eget badrum</p>
            </li>
            <li className="flex">
              <Image src="/check.svg" width="16" height="11"></Image>
              <p className="mx-[10px]">Fri parkering</p>
            </li>
            <li className="flex">
              <Image src="/check.svg" width="16" height="11"></Image>
              <p className="mx-[10px]">Biljard</p>
            </li>
          </ul>
          <h3 className="mb-[24px] text-xl">
            Önskade egenskaper hos hyresgäst
          </h3>
          <ButtonBorder text="Djurvän" />
          <ButtonBorder text="Ordningsam" />
          <ButtonBorder text="Social" />
          <ButtonBorder text="Rökfri" />
          <ButtonBorder text="Vattnar gärna växterna" />
          <ButtonBorder text="Student" />
          <ButtonBorder text="Vegetarian" />
          <ButtonBorder text="Kattvakt" />
          <ButtonBorder text="Borta mycket" />
          <ButtonBorder text="Sparsam" />

          <h2 className="my-[24px] w-[357px] text-2xl">
            Vill du ändra något i annonsen?
          </h2>
          <button className="my-[8px] mx-[2px] h-[52px] rounded-full border  border-indigo-900 px-[30px] text-[24px] text-indigo-900">
            Redigera annons
          </button>
        </div>
        <div className="box-shadow my-[24px] h-[341px] w-[357px] p-[24px]">
          <div className="flex justify-between">
            <p className="mb-[24px] text-2xl text-gray-900">Månadskostnad</p>
            <p className="text-[20px]">8 369 kr</p>
          </div>
          <hr className="mb-[24px] text-black" />
          <div className="flex justify-between">
            <div className="mb-[24px] flex items-center">
              <p className="mr-[8px] text-[16px] text-gray-900">Hyra</p>
              <Image src="/info-filled.svg" width="20" height="20" />
            </div>
            <p>7 500 kr</p>
          </div>
          <div className="flex justify-between">
            <p className="mb-[32px] text-[16px] text-gray-900">
              Serviceavgift
              <Image src="/info-filled.svg" width="20" height="20" />
            </p>
            <p>896 kr</p>
          </div>
          <div className="flex justify-between">
            <p className="mb-[24px] text-2xl text-gray-900">Deposition</p>
            <p>7 500 kr</p>
          </div>
          <p className="mb-[24px] text-[16px] text-gray-900">
            Din deposition är säker hos oss på Kollektiva.{' '}
            <span className="font-bold">Läs mer</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RumUthyres
