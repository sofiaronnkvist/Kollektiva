import ButtonMd from "../Buttons/ButtonMd";

function Ansokning() {
    return(
        <div>
            <div className='flex flex-col gap-4 pt-10 pr-2 md:pr-60 w-full'>
                <button className='shadow-sm text-sm flex items-center gap-1 justify-center h-[52px] w-[250px] border rounded-lg border-1'><img src='/home-muted.png' alt='A house' />Min profil \ Ansökningar</button>
                <h4>Du har fått 150 svar på din annons “Rum uthyres”. Här visas de bästa matchningarna för dig baserat på dina önskemål.</h4>
                <div className="border rounded-md border-indigo-900 flex p-4 justify-between items-baseline w-full">
                    <div className="flex gap-6">
                        <div>
                            <img className="rounded-full" src="/monogram1.png" alt="Profilbild" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl pb-2">Adam 26</h3>
                            <p className="text-lg pb-2">Student söker bostad</p>
                            <p className="text-sm">Hej Marianne! Jag heter Adam och jag skulle gärna...</p>
                        </div>
                    </div>
                    <div>
                    <button className="choice-button"><a href="/profil/adam-profil">Läs mer</a></button>
                    </div>
                </div>
                <div className="border rounded-md border-indigo-900 flex p-4 justify-between items-baseline w-full">
                    <div className="flex gap-6">
                        <div>
                            <img className="rounded-full" src="/monogram2.png" alt="Profilbild" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl pb-2">Nader 33</h3>
                            <p className="text-lg pb-2">Utvecklare söker boende med internet</p>
                            <p className="text-sm">Hallihallå jag heter Nader, en växtälskare som...</p>
                        </div>
                    </div>
                    <div>
                    <button className="choice-button">Läs mer</button>
                    </div>
                </div>
                <div className="border rounded-md border-indigo-900 flex p-4 justify-between items-baseline w-full">
                    <div className="flex gap-6">
                        <div>
                            <img className="rounded-full" src="/monogram3.png" alt="Profilbild" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl pb-2">Michaela 19</h3>
                            <p className="text-lg pb-2">Vill flytta hemifrån</p>
                            <p className="text-sm">Hejhej! Jag vill flytta hemifrån nu då jag kommit...</p>
                        </div>
                    </div>
                    <div>
                    <button className="choice-button">Läs mer</button>
                    </div>
                </div>
            </div>
            <div className="pt-10">
            <ButtonMd text="Visa fler"></ButtonMd>
            </div>
        </div>
    );
}

export default Ansokning;