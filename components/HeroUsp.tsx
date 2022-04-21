import Image from 'next/image'

function HeroUsp() {
    return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center px-10 md:px-44 py-20">
        <div className="flex flex-col justify-between md:w-1/2 gap-4">
            <h2 className="font-bold text-3xl text-center md:text-left">Varför bli en del av Kollektiva?</h2>
            <ul>
                <li>
                    <div className='flex justify-left items-center gap-2 py-6'>
                    <img src="/Round1.png" />
                    <h4 className="font-bold text-2xl">En tryggare uthyrning</h4>
                    </div>
                    <p className='text-lg'>Kollektiva ser till att du och din hyresgäst har en trygg uthyrningsperiod och att hyrorna betalas säkert.</p>
                </li>
                <li>
                    <div className='flex justify-left items-center gap-2 py-6'>
                    <img src="/Round2.png" />
                    <h4 className="font-bold text-2xl">Verifierade medlemmar</h4>
                    </div>
                    <p className='text-lg'>Alla våra medlemmar är verifierade för din och vår säkerhet.</p>
                </li>
                <li>
                    <div className='flex justify-left items-center gap-2 py-6'>
                    <img src="/Round3.png" />
                    <h4 className="font-bold text-2xl">Matchade ansökningar</h4>
                    </div>
                    <p className='text-lg'>Vi sköter matchningsprocessen så du ska få den bästa och mest lämpliga hyresgästen.</p>
                </li>
            </ul>
        </div>
        <div className="flex md:w-1/2 rounded-3xl justify-center">
            <Image src="/ny-illustration.png" alt="Cartoon woman in window" layout="intrinsic" objectFit="contain" width={445} height={538} />
        </div>
    </div>);
}

export default HeroUsp;