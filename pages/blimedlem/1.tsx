import React from 'react'
import ButtonLg from '../../components/Buttons/ButtonLg'
import LoginHeader from '../../components/LoginHeader'
import QuestionMark from '../../components/QuestionMark'
import Link from 'next/link'

function Blimedlem1() {
  return (
    <div>
      <LoginHeader link="/" />
      <div className="container mx-auto w-[450px] bg-white">
        <h1 className="mt-[100px] mb-[18px] text-[30px]">
          Bli en del av Kollektiva
        </h1>
        <p className="mb-[12px] text-[20px] text-indigo-800">
          Hos Kollektiva hör alla hemma. För att säkerställa det så ber vi dig
          att skriva under på följande:
        </p>
        <p className="mb-[40px] text-[20px]">
          Jag samtycker till att behandla alla på Kollektiva med respekt och
          utan fördomar, oavsett religion, nationellt ursprung, etnicitet,
          funktionsvariation, kön, könsidentitet, sexuell läggning eller ålder.
        </p>
        <Link href="/skapaannons">
          <button className="h-[72px] w-[434px] rounded-full bg-indigo-500 text-[24px] text-white">
            Godkänn
          </button>
        </Link>
      </div>
      <QuestionMark />
    </div>
  )
}

export default Blimedlem1
