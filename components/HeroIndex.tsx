import ButtonMd from "./Buttons/ButtonMd";
import Image from 'next/image'

function HeroIndex() {
    return (
    <div className="flex p-20">
        <div className="flex flex-1 flex-col justify-between">
            <h1 className="font-bold text-6xl">Hitta den bästa<br></br> lösningen för din boendesituation</h1>
            <h3 className="text-xl text-gray-500">Oavsett om du vill hyra ut ditt boende, hitta en inneboende eller om du själv är på jakt efter någonstans att bo så finns vi på Kollektiva här för dig.</h3>
            <div className="">
                <ButtonMd text="Sök bostad"></ButtonMd>
                <ButtonMd text="Bli hyresvärd"></ButtonMd>
            </div>
        </div>
        <div className="flex flex-1 w-50 h-50 rounded-3xl">
            <Image src="/img1.jpeg" alt="Woman in a cabin" layout="intrinsic" objectFit="contain" width={400} height={400} />
        </div>
    </div>);
}

export default HeroIndex;