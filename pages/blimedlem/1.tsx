import React from 'react'
import ButtonLg from '../../components/Buttons/ButtonLg'
import LoginHeader from '../../components/LoginHeader'
import QuestionMark from '../../components/QuestionMark'

function Blimedlem1() {
  return (
    <div>
      <LoginHeader />
      <div className="container mx-auto w-[450px] bg-white">
        <h1 className="mt-[72px] text-[30px]">Bli en del av Kollektiva</h1>
        <p className="text-[20px] text-indigo-800">
          Hos Kollektiva hör alla hemma. För att säkerställa det så ber vi dig
          att skriva under på följande:
        </p>
        <p className="text-[20px]">
          Jag samtycker till att behandla alla på Kollektiva med respekt och
          utan fördomar, oavsett religion, nationellt ursprung, etnicitet,
          funktionsvariation, kön, könsidentitet, sexuell läggning eller ålder.
        </p>
        <ButtonLg text="Godkänn" />
      </div>
      <QuestionMark />
    </div>
  )
}

export default Blimedlem1
