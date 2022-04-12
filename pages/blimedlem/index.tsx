import React from 'react'
import ButtonLg from '../../components/Buttons/ButtonLg'
import ButtonSm from '../../components/Buttons/ButtonSm'
import ButtonSm2 from '../../components/Buttons/ButtonSm2'
import ButtonMd from '../../components/Buttons/ButtonMd'
import LoginHeader from '../../components/LoginHeader'

function Register() {
  return (
    <div>
      <LoginHeader />
      <div className="flex h-screen items-center bg-slate-50">
        <div className="container mx-auto h-[400px] bg-white">
          <h1 className="text-center">Bli medlem</h1>
          <form action="">
            <label htmlFor="namn">Förnamn</label>
            <input type="text" name="namn" id="namn" className="border" />
            <label htmlFor="efternamn">Efternamn</label>
            <input
              type="text"
              name="efternamn"
              id="efternamn"
              className="border"
            />
            <label htmlFor="mail">E-postadress</label>
            <input type="text" name="mail" id="mail" className="border" />
          </form>
          <ButtonLg text="Godkänn och fortsätt" />
          <ButtonSm text="Nästa" />
          <ButtonMd text="Mina annonser" />
          <ButtonSm2 text="Tillbaka" />
        </div>
      </div>
    </div>
  )
}

export default Register
