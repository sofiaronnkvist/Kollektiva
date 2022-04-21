function AdamChattKomp() {
    return(
        <div className="flex p-20 gap-40">
            <div className="w-2/3">
                <div className="w-full">
                    <button className='shadow-sm text-sm flex items-center gap-1 justify-center h-[52px] w-[410px] border rounded-lg border-1'><img src="/arrow-left-circle.png" /><img src='/home-muted.png' alt='A house'/><a href="/profil">Min profil \ Konversationer \ Adam Thordsson</a></button>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-6">
                            <img className="rounded-full" src="/adam-chatt.png" alt="Adam profilbild" />
                            <h2 className="font-bold text-2xl">Adam Thordsson</h2>
                        </div>
                        <div className="flex gap-4">
                            <img src="/telefon.png" alt="Telefon" />
                            <img src="/video_ikon.png" alt="Video" />
                        </div>
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