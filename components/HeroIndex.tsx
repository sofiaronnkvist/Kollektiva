import ButtonSm2 from "./Buttons/ButtonSm2";
import ButtonSm from "./Buttons/ButtonSm";

function HeroIndex() {
    return (
    <div className="flex flex-col-reverse lg:flex-row p-8 md:p-20">
        <div className="flex lg:w-1/2 flex-col justify-between">
            <h1 className="font-bold text-3xl lg:text-6xl">Hitta den bästa lösningen för din boendesituation</h1>
            <h3 className="text-xl text-gray-500">Oavsett om du vill hyra ut ditt boende, hitta en inneboende eller om du själv är på jakt efter någonstans att bo så finns vi på Kollektiva här för dig.</h3>
            <div className="flex gap-4">
            <button className="h-[52px] w-[185px] rounded-full border border-indigo-700 text-[16px] text-indigo-900">
                Sök bostad
            </button>
            <button className="h-[52px] w-[185px] rounded-full bg-indigo-500 text-[16px] text-white">
                Bli hyresvärd
            </button>
            </div>
        </div>
        <div className="flex lg:w-1/2 max-h-[500px]">
            <img className="object-cover rounded-3xl" src="/img1.jpeg" alt="Woman in a cabin" />
        </div>
    </div>);
}

export default HeroIndex;