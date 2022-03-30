import React from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'

function Register() {
  return (
    <div>
      <nav className="mt-3 flex w-screen justify-between">
        <Logo></Logo>
        <Navigation></Navigation>
      </nav>

      <div>
        <h1>Bli medlem!</h1>
      </div>
    </div>
  )
}

export default Register
