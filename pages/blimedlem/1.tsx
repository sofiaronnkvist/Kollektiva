import React from 'react'
import ButtonLg from '../../components/Buttons/ButtonLg'

function Blimedlem1() {
  return (
    <div className="flex h-screen items-center bg-slate-50">
      <div className="container mx-auto h-[400px] bg-white">
        <h1 className="text-center">Bli en del av Kollektiva</h1>
        <p>
          Hos Kollektiva hör alla hemma. För att säkerställa det så ber vi dig
          att skriva under på följande:
        </p>
        <p>
          Jag samtycker till att behandla alla på Kollektiva med respekt och
          utan fördomar, oavsett religion, nationellt ursprung, etnicitet,
          funktionsvariation, kön, könsidentitet, sexuell läggning eller ålder.
        </p>
        <ButtonLg text="Godkänn" />
      </div>
    </div>
  )
}

export default Blimedlem1
