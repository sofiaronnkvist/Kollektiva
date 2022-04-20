import React from 'react'
import NavLoggedIn from '../../components/Navigations/NavLoggedIn'

function Profil() {
  return (
    <div>
      <NavLoggedIn name="Marianne W" />
      <div>
          <div>
              <img src="#" alt='Profilbild'/>
              <h2>Marianne Wilson</h2>
              <p>Linköping • Registrerad Maj 2021</p>
              <button>Redigera profil</button>
          </div>
          <div className='flex flex-col'>
            <div className='flex gap-2'>
                <img src='/Spara.png' alt='Spara'/>
                <button>Mina annonser</button>
            </div>
            <div className='flex gap-2'>
                <img src='/Smiley.png' alt='Smiley' />
                <button>Ansökningar</button>
            </div>
            <div className='flex gap-2'>
                <img src='/Pratbubbla.png' alt='Pratbubbla'/>
                <button>Konversationer</button>
            </div>
            <div className='flex gap-2'>
                <img src='/Hjärta.png' alt='Hjärta' />
                <button>Sparade annonser</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Profil
