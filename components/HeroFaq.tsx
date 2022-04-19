import ButtonMd from "./Buttons/ButtonMd";
import Image from 'next/image';

function HeroFaq() {
    return(
        <div className="flex flex-col gap-12 md:flex-row p-8 md:p-20">
            <div className="flex flex-col md:w-1/2 gap-10">
                <h2 className="font-bold text-5xl">Vanliga frågor<br/> och svar</h2>
                <p className="text-xl">Här finner du några vanliga frågor och svar. Om du inte hittar svar på din fråga så kontakta oss gärna via knappen nedan eller ring oss på 08-645 00 20</p>
                <ButtonMd text="Kontakta oss"></ButtonMd>
            </div>
            <div className="md:w-1/2">
                <ul>
                    <li>
                        <div className="flex">
                            <div>
                                <h4 className="font-bold">Hur sköts min betalning?</h4>
                                <p>Din betalning sköts tryggt via Kollektivas portal och både hyresvärd och hyrestagare är försäkrade.</p>
                            </div>
                            <Image src="/ArrowDown.png" alt="Arrow" layout="intrinsic" objectFit="contain" width={40} height={40} />
                        </div>
                    </li>
                    <li>
                        <div className="flex">
                            <div>
                                <h4 className="font-bold">Hur sker matchningarna?</h4>
                                <p>Din betalning sköts tryggt via Kollektivas portal och både hyresvärd och hyrestagare är försäkrade.</p>
                            </div>
                            <Image src="/ArrowDown.png" alt="Arrow" layout="intrinsic" objectFit="contain" width={40} height={40} />
                        </div>
                    </li>
                    <li>
                        <div className="flex">
                            <div>
                                <h4 className="font-bold">Vilka kan se min annons?</h4>
                                <p>Din betalning sköts tryggt via Kollektivas portal och både hyresvärd och hyrestagare är försäkrade.</p>
                            </div>
                            <Image src="/ArrowDown.png" alt="Arrow" layout="intrinsic" objectFit="contain" width={40} height={40} />
                        </div>
                    </li>
                    <li>
                        <div className="flex">
                            <div>
                                <h4 className="font-bold">Jag har inget BankID</h4>
                                <p>Din betalning sköts tryggt via Kollektivas portal och både hyresvärd och hyrestagare är försäkrade.</p>
                            </div>
                            <Image src="/ArrowDown.png" alt="Arrow" layout="intrinsic" objectFit="contain" width={40} height={40} />
                        </div>
                    </li>
                    <li>
                        <div className="flex">
                            <div>
                                <h4 className="font-bold">Hur funkar det?</h4>
                                <p>Din betalning sköts tryggt via Kollektivas portal och både hyresvärd och hyrestagare är försäkrade.</p>
                            </div>
                            <Image src="/ArrowDown.png" alt="Arrow" layout="intrinsic" objectFit="contain" width={40} height={40} />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeroFaq;