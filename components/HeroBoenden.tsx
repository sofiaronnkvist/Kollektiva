import Image from 'next/image'

function HeroBoenden() {
    return(
        <div className="p-20">
            <div>
                <h2 className="font-bold text-3xl">Nya boenden publicerade</h2>
            </div>
            <div className='flex'>
                <div>
                <button className="h-[52px] w-[185px] rounded-full bg-emerald-200 text-[24px] text-green-900">Linköping</button>
                    <Image src="/stockholm.jpeg" alt="Linköping" layout="intrinsic" objectFit="contain" width={400} height={400} />
                    <div className='flex justify-between'>
                        <h4 className='font-bold'>Ekebyvägen</h4>
                        <p>Rum 5600 SEK/månad</p>
                    </div>
                </div>
                <div>
                <button className="h-[52px] w-[185px] rounded-full bg-emerald-200 text-[24px] text-green-900">Norrköping</button>
                    <Image src="/norrkoping.jpeg" alt="Norrköping" layout="intrinsic" objectFit="contain" width={400} height={400} />
                    <div className='flex justify-between'>
                        <h4 className='font-bold'>Landsgatan</h4>
                        <p>Attefallshus 5600 SEK/månad</p>
                    </div>
                </div>
                <div>
                <button className="h-[52px] w-[185px] rounded-full bg-emerald-200 text-[24px] text-green-900">Göteborg</button>
                    <Image src="/goteborg.jpeg" alt="Göteborg" layout="intrinsic" objectFit="contain" width={400} height={400} />
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