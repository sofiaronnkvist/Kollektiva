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
          <h2 className="my-[24px] text-5xl font-bold">Rum uthyres</h2>
          <h3 className="text-xl">Rum i villa 1 rum 15 m3</h3>
          <p className="my-[24px] text-lg text-gray-600">
            Rymligt rum i enplans-villa i lugnt område i Linköping uthyres. Du
            som hyr får dela kök med mig Marianne men du får tillgång till ett
            eget badrum. Internet och härlig trädgård att vistas i finns. Jag
            ser gärna att en student hyr då det är trevligt med intellektuella
            samtal. Katt finns i hemmet (Måns).
          </p>
          <h3 className="text-xl">Detta boendet erbjuder </h3>
          <ul>
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
          <h3 className="text-xl">Önskade egenskaper hos hyresgäst</h3>
          <ButtonBorder text="HELLO" />
        </div>
        <div className="box-shadow my-[24px] h-[341px] w-[357px]">
          <p>Månadskostnad</p>
          <p>Hyra</p>
          <p>Serviceavgift</p>
          <p>Deposition</p>
        </div>
      </div>
    </div>
  )
}

export default RumUthyres
