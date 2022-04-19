import Image from 'next/image'

function HeroUsp() {
    return (
    <div className="flex p-20">
        <div className="flex flex-1 flex-col justify-between">
            <h2 className="font-bold text-3xl">Varför bli en del av Kollektiva?</h2>
            <ul>
                <li>
                    <img src="/Round1.png" />
                    <h4 className="font-bold">En tryggare uthyrning</h4>
                    <p>Kollektiva ser till att du och din hyresgäst har en trygg uthyrningsperiod och att hyrorna betalas säkert.</p>
                </li>
                <li>
                    <img src="/Round2.png" />
                    <h4 className="font-bold">En tryggare uthyrning</h4>
                    <p>Kollektiva ser till att du och din hyresgäst har en trygg uthyrningsperiod och att hyrorna betalas säkert.</p>
                </li>
                <li>
                    <img src="/Round3.png" />
                    <h4 className="font-bold">En tryggare uthyrning</h4>
                    <p>Kollektiva ser till att du och din hyresgäst har en trygg uthyrningsperiod och att hyrorna betalas säkert.</p>
                </li>
            </ul>
        </div>
        <div className="flex flex-1 w-50 h-50 rounded-3xl">
            <Image src="/img2.png" alt="Cartoon man in window" layout="intrinsic" objectFit="contain" width={400} height={400} />
        </div>
    </div>);
}

export default HeroUsp;