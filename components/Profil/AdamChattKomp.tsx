import ButtonSm from '../Buttons/ButtonSm'
import Link from 'next/link'

function AdamChattKomp() {
  return (
    <div className="flex gap-40 p-20">
      <div className="w-2/3">
        <button className="border-1 flex h-[52px] w-[410px] items-center justify-center gap-1 rounded-lg border text-sm shadow-sm">
          <img src="/arrow-left-circle.png" />
          <img src="/home-muted.png" alt="A house" />
          <a className="text-gray-400" href="/profil">
            Min profil \ Konversationer \
          </a>
          <p>Adam Thordsson</p>
        </button>
        <div className="flex justify-between py-8">
          <div className="flex items-center gap-6">
            <img
              className="rounded-full"
              src="/adam-chatt.png"
              alt="Adam profilbild"
            />
            <Link href="/profil/adam-profil">
              <h2 className="cursor-pointer text-2xl font-semibold text-gray-900 hover:text-indigo-500">
                Adam Thordsson
              </h2>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="h-[24px] w-[24px]"
              src="/telefon.png"
              alt="Telefon"
            />
            <img
              className="h-[24px] w-[24px]"
              src="/video_ikon.png"
              alt="Video"
            />
          </div>
        </div>
        <div className="flex h-full flex-col gap-2 pb-20">
          <div className="flex h-2/3 flex-col gap-6 rounded-md border border-gray-400 p-4">
            <div className="h-2/6 w-3/5 rounded-lg bg-indigo-50">
              <p className="p-2">
                Hej! Jag heter Adam och jag skulle gärna bli inneboende hos dig
                Marianne. Jag tror ditt boende passar mig perfekt, och även att
                jag passar in hos dig!
              </p>
            </div>
            <div className="h-2/6 w-3/5 self-end rounded-lg bg-indigo-500">
              <p className="p-2 text-gray-50">
                Hej Adam! Jag tycker det låter intressant! Har du några frågor
                eller funderingar, eller vill du kanske komma på kaffe så kan vi
                diskutera vidare? Mvh Marianne
              </p>
            </div>
          </div>
          <div className="h-[60px] rounded-md border border-gray-400">
            <input
              className="m-2 w-5/6"
              type="text"
              placeholder="Skriv ett meddelande"
            />
          </div>
          <div className="self-end">
            <ButtonSm text="Skicka" link="/profil/adam-chatt"></ButtonSm>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className="flex items-center gap-6">
          <img
            className="h-[96px] w-[96px] rounded-full"
            src="/room1.jpeg"
            alt="Ett rum"
          />
          <div>
            <h3 className="text-2xl font-medium text-gray-900">Rum uthyres</h3>
            <p className="text-gray-900">Rum i villa • 1 rum • 15 m3</p>
            <p className="text-gray-900">Ekebyvägen 31, Linköping</p>
          </div>
        </div>
        <div className="py-6">
          <h4 className="pb-2 text-2xl font-medium">Detta ingår</h4>
          <p className="pb-2">Säker och trygg depositionshantering ✓</p>
          <p className="pb-2">Tillgänglig kundservie alla dagar i veckan ✓</p>
          <p className="pb-2">Smidig hyreshantering ✓</p>
          <p>Verifierade hyresvärdar och hyresgäster ✓</p>
        </div>
        <div className="flex gap-6">
          <h3 className="pb-2 text-2xl font-medium">Månadskonstnad</h3>
          <p className="text-2xl">8 396 kr</p>
        </div>
        <hr className="border-gray-900" />
        <div className="flex justify-between py-6">
          <div className="flex flex-col gap-6">
            <p className="flex gap-2">
              Hyra
              <img src="/info-filled.svg" alt="Info" />
            </p>
            <p className="flex gap-2">
              Serviceavgift
              <img src="/info-filled.svg" alt="Info" />
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p>7 500 kr</p>
            <p>896 kr</p>
          </div>
        </div>
        <div className="flex gap-6">
          <h3 className="pb-2 text-2xl font-medium">Deposition</h3>
          <p className="text-2xl">7 500 kr</p>
        </div>
        <p className="pt-8">
          Din deposition är säker hos oss på
          <br /> Kollektiva. <b>Läs mer</b>
        </p>
      </div>
    </div>
  )
}

export default AdamChattKomp
