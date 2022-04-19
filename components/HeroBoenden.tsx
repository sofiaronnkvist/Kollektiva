import Image from 'next/image'

function HeroBoenden() {
    return(
        <div className="p-8 md:p-20">
            <div>
                <h2 className="font-bold text-3xl pb-8">Nya boenden publicerade</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div>
                <div className="flex max-h-[215px] max-w-[353px]">
                    <img className="object-cover rounded-3xl" src="/stockholm.jpeg" alt="Linköping" />
                    <button className="absolute translate-y-5 translate-x-4 h-[32px] w-[124px] rounded-full bg-emerald-200 text-[16px] text-green-900">Linköping</button>
                </div>
                    <div className='flex justify-between'>
                        <h4 className='font-bold'>Ekebyvägen</h4>
                        <p>Rum 5600 SEK/månad</p>
                    </div>
                </div>
                <div>
                <div className="flex max-h-[215px] max-w-[353px]">
                    <img className="object-cover rounded-3xl" src="/norrkoping.jpeg" alt="Norrköping" />
                    <button className="absolute translate-y-5 translate-x-4 h-[32px] w-[124px] rounded-full bg-emerald-200 text-[16px] text-green-900">Norrköping</button>
                </div>
                    <div className='flex justify-between'>
                        <h4 className='font-bold'>Landsgatan</h4>
                        <p>Attefallshus 5600 SEK/månad</p>
                    </div>
                </div>
                <div>
                <div className="flex max-h-[215px] max-w-[353px]">
                    <img className="object-cover rounded-3xl" src="/goteborg.jpeg" alt="Göteborg" />
                    <button className="absolute translate-y-5 translate-x-4 h-[32px] w-[124px] rounded-full bg-emerald-200 text-[16px] text-green-900">Göteborg</button>
                </div>
                    <div className='flex justify-between'>
                        <h4 className='font-bold'>Vasagatan</h4>
                        <p>Stuga 9000 SEK/månad</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBoenden;