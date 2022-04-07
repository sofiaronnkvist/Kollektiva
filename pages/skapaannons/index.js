import React from 'react'
import ButtonLg from '../../components/Buttons/ButtonLg'

function SkapaAnnons() {
  return (
    <div className="flex h-screen items-center bg-slate-50">
      <div className="container mx-auto h-[400px] bg-white">
        <h1 className="text-center">Skapa annons för din bostad</h1>
      </div>
      <div>
        <h1>
          Hej Marianne! <br />
          Det är enkelt att bli hyresvärd.
        </h1>
        <p>
          Till höger ser du en video som förklarar hur det går till. När du är
          redo klickar du på sätt igång!
        </p>
        <ButtonLg text="Sätt igång" />
      </div>
    </div>
  )
}

export default SkapaAnnons
