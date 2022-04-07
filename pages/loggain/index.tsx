import React from 'react'
import ButtonLg from '../../components/Buttons/ButtonLg'
import ButtonSm from '../../components/Buttons/ButtonSm'
import ButtonSm2 from '../../components/Buttons/ButtonSm2'
import ButtonMd from '../../components/Buttons/ButtonMd'

function Login() {
  return (
    <div className="flex h-screen items-center bg-slate-50">
      <div className="container mx-auto h-[400px] bg-white">
        <h1 className=" text-center text-[30px] font-bold">
          Logga in eller skapa konto
        </h1>
        <div>
          <button className="h-[72px] w-[434px] rounded-full bg-indigo-700 text-[24px] text-white">
            Mobilt BankID
          </button>
        </div>
        <div>
          <button className="h-[72px] w-[434px] rounded-full border border-indigo-700 bg-indigo-100 text-[24px] text-indigo-900">
            Skapa konto
          </button>
        </div>

        <p>Så loggar du in med mobilt BankID och QR-kod</p>
      </div>
    </div>
  )
}

export default Login
