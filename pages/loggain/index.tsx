import React from 'react'
import LoginHeader from '../../components/LoginHeader'
import QuestionMark from '../../components/QuestionMark'
import Link from 'next/link'
import Image from 'next/image'

function Login() {
  return (
    <div>
      <LoginHeader />
      <div className="flex items-center bg-white">
        <div className="container mx-auto">
          <h1 className="mb-[40px] mt-[186px] text-center text-[30px] font-bold">
            Logga in eller skapa konto
          </h1>
          <div className="mb-[24px] text-center">
            <button className="h-[72px] w-[434px] rounded-full bg-indigo-700 text-[18px] text-white">
              <div className="flex items-center justify-center">
                <Image src="/bankid.svg" alt="BankID" width="60" height="60" />
                <div><a href="/profil">Mobilt BankID</a></div>
              </div>
            </button>
          </div>
          <div className="mb-[32px] text-center">
            <Link href="/blimedlem">
              <button className="h-[72px] w-[434px] rounded-full border border-indigo-700 bg-indigo-100 text-[24px] text-indigo-900">
                Skapa konto
              </button>
            </Link>
          </div>

          <p className="mb-[154px] text-center text-[18px] text-indigo-700">
            Så loggar du in med mobilt BankID och QR-kod
          </p>
        </div>
      </div>
      <QuestionMark />
    </div>
  )
}

export default Login
