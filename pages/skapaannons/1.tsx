import React from 'react'
import LoginHeader from '../../components/LoginHeader'
import Link from 'next/link'
import Image from 'next/image'

function SkapaAnnons1() {
  return (
    <div>
      <LoginHeader />
      <div className="container mx-auto mt-[72px] flex items-center justify-center bg-white">
        <div className="w-[548px]">
          <h1 className="mb-[24px] text-[36px] text-indigo-800">
            Vilket typ av boende vill du hyra ut?
          </h1>
        </div>
      </div>
    </div>
  )
}

export default SkapaAnnons1
