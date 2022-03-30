import React from 'react'
import FormBankId from '../components/FormBankId'

function Register() {
  return (
    <div className="flex h-screen items-center bg-slate-50">
      <div className="container mx-auto h-[400px] bg-white">
        <p className="text-center">Logga in eller bli medlem</p>
        <h1>Välkommen till Kollektiva</h1>
        <FormBankId />
      </div>
    </div>
  )
}

export default Register
