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
        <div className="my-[32px] mr-[212px] w-[900px]">
          <button className="border-1 flex h-[52px] w-[410px] items-center justify-center gap-1 rounded-lg border text-sm shadow-sm">
            <img src="/arrow-left-circle.png" />
            <img src="/home-muted.png" alt="A house" />
            <a className="text-gray-400" href="/profil">
              Min profil \ Mina annonser \{' '}
            </a>
            <p>Rum uthyres</p>
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mr-[20px] w-[548px]">
          <Image src="/rumuthyres1.jpg" width="548" height="352" />
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          <Image src="/rumuthyres1.jpg" width="262" height="164" />
          <Image src="/rumuthyres1.jpg" width="262" height="164" />
          <Image src="/rumuthyres1.jpg" width="262" height="164" />
          <Image src="/rumuthyres1.jpg" width="262" height="164" />
          <button className="absolute h-[36px] w-[181px] translate-y-[300px] translate-x-[320px] rounded-full border border-indigo-900 bg-indigo-100 text-[16px] text-indigo-900">
            + Se alla bilder
          </button>
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
        <div className=" w-[357px]">
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
              <div className="mb-[32px] flex items-center">
                <p className="mr-[8px] text-[16px] text-gray-900">
                  Serviceavgift
                </p>
                <Image src="/info-filled.svg" width="20" height="20" />
              </div>
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

          <h2 className="mt-[48px] mb-[16px] w-[357px] text-2xl">
            Har du hittat någon du vill hyra ut till?
          </h2>
          <p>
            När du skapar hyresavtal kan du välja bland de personer du varit i
            kontakt med.
          </p>
          <button className="mt-[24px] h-[48px] w-[262px] rounded-full bg-indigo-500 text-[20px] text-white">
            Skapa hyresavtal
          </button>
        </div>
      </div>
    </div>
  )
}

export default RumUthyres
