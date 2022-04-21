import Link from 'next/link'

function MinaAnnonser() {
  return (
    <div className="flex w-2/3 flex-col gap-4 pt-10 pr-20">
      <button className="border-1 flex h-[52px] w-[250px] items-center justify-center gap-1 rounded-lg border text-sm text-gray-400 shadow-sm">
        <img src="/home-muted.png" alt="A house" />
        Min profil \ <p className="text-gray-900">Mina annonser</p>
      </button>
      <div className="h-[300px] w-full">
        <img
          className="h-full w-full rounded-3xl object-cover shadow-md"
          src="/room1.jpeg"
          alt="Rum"
        />
      </div>
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">Rum uthyres</h2>
          <p>Rum i villa • 1 rum • 15 m3</p>
        </div>
        <div className="flex gap-2">
          <button className="h-[38px] w-[120px] rounded-full border border-indigo-700 text-[16px] text-indigo-900">
            Redigera
          </button>
          <Link href="/rum-uthyres">
            <button className="h-[38px] w-[120px] rounded-full bg-indigo-500 text-[16px] text-white">
              Se annons
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MinaAnnonser
