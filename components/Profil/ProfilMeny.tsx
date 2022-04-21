function ProfilMeny(props:string) {
    return(
        <div className='pl-20 pt-10 flex flex-col gap-20 w-1/3'>
            <div className='flex flex-col gap-4'>
                <img className='rounded-full h-[86px] w-[86px]' src="/Marianne.png" alt='Profilbild'/>
                <h2 className='text-3xl'>Marianne Wilson</h2>
                <p className='text-base font-normal'>Linköping • Registrerad Maj 2021</p>
                <button className="h-[29px] w-[136px] text-base rounded-full border border-indigo-700 text-[16px] text-indigo-900 font-medium">Redigera profil</button>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex items-center gap-2 pl-4 rounded-full hover:bg-indigo-50 h-[52px] w-[250px]'>
                    <img className='h-[24px]' src='/Spara.png' alt='Spara'/>
                    <button className='text-gray-500 hover:text-indigo-500'><a href='/profil'>Mina annonser</a></button>
                </div>
                <div className='flex items-center gap-2 pl-4 rounded-full hover:bg-indigo-50 h-[52px] w-[250px]'>
                    <img className='h-[24px]' src='/Smiley.png' alt='Smiley' />
                    <button className='text-gray-500 hover:text-indigo-500'><a href='/profil/ansokningar'>Ansökningar</a></button>
                </div>
                <div className='flex items-center gap-2 pl-4 rounded-full hover:bg-indigo-50 h-[52px] w-[250px]'>
                    <img className='h-[24px]' src='/Pratbubbla.png' alt='Pratbubbla'/>
                    <button className='text-gray-500 hover:text-indigo-500'><a href='/profil/konversationer'>Konversationer</a></button>
                </div>
                <div className='flex items-center gap-2 pl-4 rounded-full hover:bg-indigo-50 h-[52px] w-[250px]'>
                    <img className='h-[24px]' src='/Hjärta.png' alt='Hjärta' />
                    <button className='text-gray-500 hover:text-indigo-500'><a href='/profil/sparadeannonser'>Sparade annonser</a></button>
                </div>
            </div>
        </div>
    );
}

export default ProfilMeny;