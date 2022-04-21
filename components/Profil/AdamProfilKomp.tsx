import ButtonSm from "../Buttons/ButtonSm";

function AdamProfilKomp() {
    return(
    <div className="flex p-20 gap-40">
        <div className="w-2/3">
            <div>
                <button className='shadow-sm text-sm flex items-center gap-1 justify-center h-[52px] w-[410px] border rounded-lg border-1'><img src="/arrow-left-circle.png" /><img src='/home-muted.png' alt='A house'/><a className="text-gray-400" href="/profil">Min profil \ Ansökningar \ </a><p>Adam Thordsson</p></button>
            </div>
            <div>
                <h1 className="py-10 text-5xl font-bold">Adam Thordsson, 26 år</h1>
                <h3 className="pb-8 text-2xl">Student söker bostad</h3>
                <p className="text-lg text-gray-500">Jag söker efter ett rum att hyra tillsvidare (minst ett år) med goda kollektivtrafik förbindelser, gärna i nära Linköping universitet. Jag är en lugn kille med stabil ekonomi, som gillar att ha ordning och reda.<br/><span><br/></span> På fritiden tycker jag om att träna, umgås med vänner och laga mat.<br/><span><br/></span>Goda referenser finns att tillgå.<br/><span><br/></span>Ser framemot att höra från dig!</p>
            </div>
            <h3 className="text-2xl pt-14">Adam passar in på 10/10 av dina önskemål</h3>
            <div className="py-8">
                <button className="choice-button m-1">Djurvän</button>
                <button className="choice-button m-1">Ordningsam</button>
                <button className="choice-button m-1">Social</button>
                <button className="choice-button m-1">Rökfri</button>
                <br/>
                <button className="choice-button m-1">Vattnar gärna växterna</button>
                <button className="choice-button m-1">Student</button>
                <button className="choice-button m-1">Vegetarian</button>
                <br/>
                <button className="choice-button m-1">Kattvakt</button>
                <button className="choice-button m-1">Borta mycket</button>
                <button className="choice-button m-1">Sparsam</button>
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

export default AdamProfilKomp;