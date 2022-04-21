import ButtonSm from "../Buttons/ButtonSm";

function AdamChattKomp() {
    return(
        <div className="flex p-20 gap-40">
            <div className="w-2/3">
                <button className='shadow-sm text-sm flex items-center gap-1 justify-center h-[52px] w-[410px] border rounded-lg border-1'><img src="/arrow-left-circle.png" /><img src='/home-muted.png' alt='A house'/><a href="/profil">Min profil \ Konversationer \ Adam Thordsson</a></button>
                <div className="py-8 flex justify-between">
                    <div className="flex items-center gap-6">
                        <img className="rounded-full" src="/adam-chatt.png" alt="Adam profilbild" />
                        <h2 className="font-bold text-2xl">Adam Thordsson</h2>
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
                <img className="rounded-full" src="/adam-chatt.png" alt="Adam profilbild" />
                <h4 className="text-lg py-6">Om Adam</h4>
                <div className="flex gap-4 flex-col">
                    <p className="flex gap-2"><img src="/user-check-black.png" alt="Verifierad check"/>Verifierad användare</p>
                    <p className="flex gap-2"><img src="/home.svg" alt="Hus pin"/>Bor i Göteborg</p>
                    <p className="flex gap-2"><img src="/map-pin.png" alt="Karta pin"/>Söker bostad i Linköping</p>
                    <p className="flex gap-2"><img src="/map-pin.png" alt="Karta pin"/>Maxhyra 9000 kr</p>
                    <p className="flex gap-2"><img src="/map-pin.png" alt="Karta pin"/>Minsta antal rum: 1</p>
                </div>
                <p className="text-sm pt-14">Adam har skickat ett<br /> meddelande till dig</p>
                <div className="flex flex-col gap-4 pt-6">
                    <button className="h-[38px] w-[210px] rounded-full bg-indigo-500 text-[16px] text-white">Svara på meddelande</button>
                    <button className="flex items-center justify-center gap-2 h-[38px] w-[210px] rounded-full border border-indigo-700 text-[16px] text-indigo-900"><img src="/heart.png" alt="Hjärta" />Spara profil</button>
                </div>
            </div>
        </div>
        );
}

export default AdamChattKomp;