import React from 'react'
import LoginHeader from '../../components/LoginHeader'
import Link from 'next/link'
import QuestionMark from '../../components/QuestionMark'

function Register() {
  return (
    <div>
      <LoginHeader />
      <div>
        <div className="container mx-auto">
          <h1 className="mt-[72px] text-center text-[30px]">
            Slutför registreringen
          </h1>
          <div className="flex justify-center">
            <form action="">
              <label
                className="mb-2 block text-sm text-gray-700"
                htmlFor="namn"
              >
                Förnamn
              </label>
              <input
                type="text"
                name="namn"
                id="namn"
                placeholder="Namn"
                className="focus:shadow-outline mb-2 w-[320px] appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              />
              <label
                className="mb-2 block text-sm text-gray-700"
                htmlFor="efternamn"
              >
                Efternamn
              </label>
              <input
                type="text"
                name="efternamn"
                id="efternamn"
                placeholder="Efternamn"
                className="focus:shadow-outline mb-2 w-[320px] appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              />
              <p className="mb-[56px] text-xs text-gray-600">
                Namnet ska matcha ditt nationella ID.
              </p>
              <label
                className="mb-2 block text-sm text-gray-700"
                htmlFor="mail"
              >
                E-postadress
              </label>
              <input
                type="text"
                name="mail"
                id="mail"
                placeholder="epost@epost.se"
                className="focus:shadow-outline mb-2 w-[320px] appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              />
              <p className="mb-[56px] text-xs text-gray-600">
                Vi e-postar dig bekräftelser och kvitton.
              </p>
              <Link href="/blimedlem/1">
                <button
                  type="submit"
                  className="h-[52px] w-[320px] rounded-full  bg-indigo-500 text-[20px] text-white"
                >
                  Godkänn och fortsätt
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <QuestionMark />
    </div>
  )
}

export default Register
