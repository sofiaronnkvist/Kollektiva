function MinaAnnonser() {
    return(
        <div className='flex flex-col gap-4 pt-10 pr-20 w-2/3'>
            <button className='shadow-sm text-sm flex items-center gap-1 justify-center h-[52px] w-[250px] border rounded-lg border-1'><img src='/home.svg' alt='A house' />Min profil \ Mina annonser</button>
            <div className='h-[300px] w-full'>
                <img className='shadow-md w-full h-full object-cover rounded-3xl' src='/room1.jpeg' alt='Rum'/>
            </div>
            <div className='flex justify-between items-end'>
                <div className='flex flex-col'>
                    <h2 className='text-2xl font-semibold'>Rum uthyres</h2>
                    <p>Rum i villa • 1 rum • 15 m3</p>
                </div>
                <div className='flex gap-2'>
                    <button className="h-[38px] w-[120px] rounded-full border border-indigo-700 text-[16px] text-indigo-900">Redigera</button>
                    <button className="h-[38px] w-[120px] rounded-full bg-indigo-500 text-[16px] text-white">Se annons</button>
                </div>
            </div>
        </div>
    );
}

export default MinaAnnonser;