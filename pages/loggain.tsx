import React from 'react'
import FormBankId from '../components/FormBankId'
import ButtonLg from '../components/Buttons/ButtonLg'
import ButtonSm from '../components/Buttons/ButtonSm'
import ButtonSm2 from '../components/Buttons/ButtonSm2'
import ButtonMd from '../components/Buttons/ButtonMd'

function Login() {
  return (
    <div className="flex h-screen items-center bg-slate-50">
      <div className="container mx-auto h-[400px] bg-white">
        <p className="text-center">Logga in eller bli medlem</p>
        <h1>Välkommen till Kollektiva</h1>
        <FormBankId />
        <ButtonLg text="Skapa konto" />
        <ButtonSm text="Nästa" />
        <ButtonMd text="Mina annonser" />
        <ButtonSm2 text="Tillbaka" />
      </div>
    </div>
  )
}

export default Login
