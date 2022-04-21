import React from 'react'
import LoginHeader from '../../components/LoginHeader'
import ButtonSm2 from '../../components/Buttons/ButtonSm2'
import QuestionMark from '../../components/QuestionMark'
import Link from 'next/link'
import ButtonSm from '../../components/Buttons/ButtonSm'

function SkapaAnnons2() {
  return (
    <div>
      <LoginHeader add="Spara och " link="/profil" />
      <div className="container mx-auto mt-[50px] flex items-center justify-center bg-white">
        <div className="w-[548px]">
          <h1 className="mb-[56px] text-[36px] text-indigo-800">
            Hur stort är det där du vill hyra ut?
          </h1>
          <div className="mb-[56px] flex">
            <div className="mr-[80px]">
              <h2 className="mb-[16px] text-[20px] text-indigo-800">
                Antal rum
              </h2>
              <div className="flex items-center">
                <select className="h-[52px] w-[167px] rounded border border-indigo-900">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
                <p className="ml-[12px] text-[20px] text-indigo-800">Rum</p>
              </div>
            </div>
            <div>
              <h2 className="mb-[16px] text-[20px] text-indigo-800">Storlek</h2>
              <div className="flex items-center">
                <input
                  type="text"
                  className="h-[52px] rounded border border-indigo-900"
                />
                <p className="ml-[12px] text-[20px] text-indigo-800">
                  m<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
          <h2 className="my-[24px] text-[20px] text-indigo-800">
            Hur många personer kan bo här?
          </h2>
          <div className="mb-[100px]">
            <button className="mr-[10px] h-[50px] w-[50px] rounded-full border border-indigo-900 text-[18px] hover:bg-indigo-500 hover:text-white">
              1
            </button>
            <button className="mr-[10px] h-[50px] w-[50px] rounded-full border border-indigo-900 text-[18px] hover:bg-indigo-500 hover:text-white">
              2
            </button>
            <button className="mr-[10px] h-[50px] w-[50px] rounded-full border border-indigo-900 text-[18px] hover:bg-indigo-500 hover:text-white">
              3
            </button>
            <button className="mr-[10px] h-[50px] w-[50px] rounded-full border border-indigo-900 text-[18px] hover:bg-indigo-500 hover:text-white">
              4
            </button>
            <button className="mr-[10px] h-[50px] w-[50px] rounded-full border border-indigo-900 text-[18px] hover:bg-indigo-500 hover:text-white">
              5
            </button>
            <button className="mr-[10px] h-[50px] w-[50px] rounded-full border border-indigo-900 text-[18px] hover:bg-indigo-500 hover:text-white">
              6+
            </button>
          </div>
          <div className="flex items-center justify-between">
            <ButtonSm2 text="Tillbaka" link="/skapaannons/1" />
            <p className="text-[20px] text-indigo-700">2/9</p>
            <ButtonSm text="Nästa" link="/skapaannons/3" />
          </div>
        </div>
      </div>
      <QuestionMark />
    </div>
  )
}

export default SkapaAnnons2
