import ButtonMd from "./Buttons/ButtonMd";

function HeroIndex() {
    return (
    <div className="flex p-20">
        <div className="flex flex-1 flex-col justify-between">
            <h1 className="font-bold text-6xl">Hitta den bästa<br></br> lösningen för din boendesituation</h1>
            <h3 className="text-xl">Oavsett om du vill hyra ut ditt boende, hitta en inneboende eller om du själv är på jakt efter någonstans att bo så finns vi på Kollektiva här för dig.</h3>
            <div className="">
                <ButtonMd text="Sök bostad"></ButtonMd>
                <ButtonMd text="Bli hyresvärd"></ButtonMd>
            </div>
        </div>
        <div className="flex flex-1">
            <img className="rounded-3xl" src="/img1.jpeg" alt="Woman in a cabin" />
        </div>
    </div>);
}

export default HeroIndex;