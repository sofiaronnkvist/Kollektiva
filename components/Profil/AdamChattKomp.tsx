import ButtonSm from "../Buttons/ButtonSm";

function AdamChattKomp() {
    return(
        <div className="flex p-20 gap-40">
            <div className="w-2/3">
                <button className='shadow-sm text-sm flex items-center gap-1 justify-center h-[52px] w-[410px] border rounded-lg border-1'><img src="/arrow-left-circle.png" /><img src='/home-muted.png' alt='A house'/><a className="text-gray-400" href="/profil">Min profil \ Konversationer \</a><p>Adam Thordsson</p></button>
                <div className="py-8 flex justify-between">
                    <div className="flex items-center gap-6">
                        <img className="rounded-full" src="/adam-chatt.png" alt="Adam profilbild" />
                        <h2 className="font-bold text-2xl text-gray-900">Adam Thordsson</h2>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img className="h-[24px] w-[24px]" src="/telefon.png" alt="Telefon" />
                        <img className="h-[24px] w-[24px]" src="/video_ikon.png" alt="Video" />
                    </div>
                </div>
                <div className="h-full flex flex-col gap-2 pb-20">
                <div className="p-4 flex gap-6 flex-col border rounded-md border-gray-400 h-2/3">
                        <div className="bg-indigo-50 w-3/5 h-2/6 rounded-lg">
                            <p className="p-2">Hej! Jag heter Adam och jag skulle gärna bli inneboende hos dig Marianne. Jag tror ditt boende passar mig perfekt, och även att jag passar in hos dig!</p>
                        </div>
                        <div className="bg-indigo-500 w-3/5 h-2/6 self-end rounded-lg">
                            <p className="p-2 text-gray-50">Hej Adam! Jag tycker det låter intressant! Har du några frågor eller funderingar, eller vill du kanske komma på kaffe så kan vi diskutera vidare?
                            Mvh Marianne</p>
                        </div>
                </div>
                <div className="border rounded-md border-gray-400 h-[60px]">
                    <input className="m-2 w-5/6" type="text" placeholder="Skriv ett meddelande"/>
                </div>
                <div className="self-end">
                    <ButtonSm text="Skicka"></ButtonSm>
                </div>
                </div>
            </div>
            <div className="w-1/3">
                <div className="flex items-center gap-6">
                    <img className="rounded-full w-[96px] h-[96px]" src="/room1.jpeg" alt="Ett rum" />
                    <div>
                        <h3 className="text-2xl text-gray-900 font-medium">Rum uthyres</h3>
                        <p className="text-gray-900">Rum i villa • 1 rum • 15 m3</p>
                        <p className="text-gray-900">Ekebyvägen 31, Linköping</p>
                    </div>
                </div>
                <div className="py-6">
                    <h4 className="text-2xl pb-2 font-medium">Detta ingår</h4>
                    <p className="pb-2">Säker och trygg depositionshantering ✓</p>
                    <p className="pb-2">Tillgänglig kundservie alla dagar i veckan ✓</p>
                    <p className="pb-2">Smidig hyreshantering  ✓</p>
                    <p>Verifierade hyresvärdar och hyresgäster  ✓</p>
                </div>
                <div className="flex gap-6">
                    <h3 className="text-2xl pb-2 font-medium">Månadskonstnad</h3>
                    <p className="text-2xl">8 396 kr</p>
                </div>
                <hr className="border-gray-900" />
                <div className="flex justify-between py-6">
                    <div className="flex flex-col gap-6">
                        <p className="flex gap-2">Hyra<img src="/info-filled.svg" alt="Info"/></p>
                        <p className="flex gap-2">Serviceavgift<img src="/info-filled.svg" alt="Info"/></p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <p>7 500 kr</p>
                        <p>896 kr</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <h3 className="text-2xl pb-2 font-medium">Deposition</h3>
                    <p className="text-2xl">7 500 kr</p>
                </div>
                <p className="pt-8">Din deposition är säker hos oss på<br/> Kollektiva. <b>Läs mer</b></p>
            </div>
        </div>
        );
}

export default AdamChattKomp;