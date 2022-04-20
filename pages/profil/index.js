import React from 'react';
import NavLoggedIn from '../../components/Navigations/NavLoggedIn';

function Profil() {
  return (
    <div>
      <NavLoggedIn name="Marianne W" />
      <div className='flex'>
        <div className='p-20 flex flex-col gap-20'>
            <div className='flex flex-col gap-4'>
                <img className='rounded-full h-[86px] w-[86px]' src="/Marianne.png" alt='Profilbild'/>
                <h2 className='text-3xl'>Marianne Wilson</h2>
                <p className='text-base font-normal'>Linköping • Registrerad Maj 2021</p>
                <button className="h-[29px] w-[136px] text-base rounded-full border border-indigo-700 text-[16px] text-indigo-900 font-medium">Redigera profil</button>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex items-center gap-2 pl-4 rounded-full hover:bg-indigo-50 h-[52px] w-[250px]'>
                    <img className='h-[24px]' src='/Spara.png' alt='Spara'/>
                    <button className='text-gray-500 hover:text-indigo-500'>Mina annonser</button>
                </div>
                <div className='flex items-center gap-2 pl-4 rounded-full hover:bg-indigo-50 h-[52px] w-[250px]'>
                    <img className='h-[24px]' src='/Smiley.png' alt='Smiley' />
                    <button className='text-gray-500 hover:text-indigo-500'>Ansökningar</button>
                </div>
                <div className='flex items-center gap-2 pl-4 rounded-full hover:bg-indigo-50 h-[52px] w-[250px]'>
                    <img className='h-[24px]' src='/Pratbubbla.png' alt='Pratbubbla'/>
                    <button className='text-gray-500 hover:text-indigo-500'>Konversationer</button>
                </div>
                <div className='flex items-center gap-2 pl-4 rounded-full hover:bg-indigo-50 h-[52px] w-[250px]'>
                    <img className='h-[24px]' src='/Hjärta.png' alt='Hjärta' />
                    <button className='text-gray-500 hover:text-indigo-500'>Sparade annonser</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-4 p-20'>
            <button className='text-sm flex items-center gap-1 justify-center h-[52px] w-[250px] border rounded-lg border-1'><img src='/home.svg' alt='A house' />Min profil \ Mina annonser</button>
            <div className='h-[248px] w-[625]'>
                <img className='object-cover rounded-3xl' src='/room1.jpeg' alt='Rum'/>
            </div>
            <h2>Rum uthyres</h2>
            <p>Rum i villa • 1 rum • 15 m3</p>
            <button className="h-[38px] w-[120px] rounded-full border border-indigo-700 text-[16px] text-indigo-900">Redigera</button>
            <button className="h-[38px] w-[120px] rounded-full bg-indigo-500 text-[16px] text-white">Se annons</button>
        </div>
      </div>
    </div>
  )
}

export default Profil
