import SearchBar from "./SearchBar";

function Bostad() {
    return(
    <div>
        <div className="flex w-full justify-between items-center pb-6">
            <img className="pl-20 h-full" src="/arrow-left-circle.png" alt="Arrow left"/>
            <SearchBar></SearchBar>
            <span></span>
        </div>
        <hr />
        <div className="w-full p-20 flex">
            <div className="flex flex-col w-2/5">
                <div className="w-full">
                    <div className="flex gap-6 pb-6">
                        <div className="w-[167px] h-[120px]">
                            <img className="object-cover rounded-3xl w-full h-full" src="/rum1.png" alt="Ett rum" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-xl">Ekebyvägen 31</h3>
                            <p>Rum i villa  1 rum  15 m3</p>
                            <p className="pt-4">8 259 SEK/månad</p>
                        </div>
                    </div>
                <hr className="border-gray-200 pb-6" />
                </div>
                <div className="w-full">
                    <div className="flex gap-6 pb-6">
                        <div className="w-[167px] h-[120px]">
                            <img className="object-cover rounded-3xl w-full h-full" src="/rum2.jpeg" alt="Ett rum" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-xl">Ekebyvägen 31</h3>
                            <p>Rum i villa  1 rum  15 m3</p>
                            <p className="pt-4">8 259 SEK/månad</p>
                        </div>
                    </div>
                <hr className="border-gray-200 pb-6" />
                </div>
                <div className="w-full">
                    <div className="flex gap-6 pb-6">
                        <div className="w-[167px] h-[120px]">
                            <img className="object-cover rounded-3xl w-full h-full" src="/rum3.jpeg" alt="Ett rum" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-xl">Ekebyvägen 31</h3>
                            <p>Rum i villa  1 rum  15 m3</p>
                            <p className="pt-4">8 259 SEK/månad</p>
                        </div>
                    </div>
                <hr className="border-gray-200 pb-6" />
                </div>
                <div className="w-full">
                    <div className="flex gap-6 pb-6">
                        <div className="w-[167px] h-[120px]">
                            <img className="object-cover rounded-3xl w-full h-full" src="/rum4.jpeg" alt="Ett rum" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-xl">Ekebyvägen 31</h3>
                            <p>Rum i villa  1 rum  15 m3</p>
                            <p className="pt-4">8 259 SEK/månad</p>
                        </div>
                    </div>
                <hr className="border-gray-200 pb-6" />
                </div>
                <div className="w-full">
                    <div className="flex gap-6 pb-6">
                        <div className="w-[167px] h-[120px]">
                            <img className="object-cover rounded-3xl w-full h-full" src="/rum1.png" alt="Ett rum" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-xl">Ekebyvägen 31</h3>
                            <p>Rum i villa  1 rum  15 m3</p>
                            <p className="pt-4">8 259 SEK/månad</p>
                        </div>
                    </div>
                <hr className="border-gray-200 pb-6" />
                </div>
                <div className="w-full">
                    <div className="flex gap-6 pb-6">
                        <div className="w-[167px] h-[120px]">
                            <img className="object-cover rounded-3xl w-full h-full" src="/rum2.jpeg" alt="Ett rum" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-xl">Ekebyvägen 31</h3>
                            <p>Rum i villa  1 rum  15 m3</p>
                            <p className="pt-4">8 259 SEK/månad</p>
                        </div>
                    </div>
                <hr className="border-gray-200 pb-6" />
            </div>
            <div className="flex border rounded-md border-gray-200 divide-x w-[357px] h-[36px] justify-evenly items-center">
                <div>
                    <p className="text-sm text-gray-500">Tillbaka</p>
                </div>
                <div>
                    <p className="text-indigo-800 text-sm pl-4">1</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 pl-4">2</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 pl-4">3</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 pl-4">4</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 pl-4">5</p>
                </div>
                <div>
                    <p className="text-indigo-800 text-sm pl-2">Nästa</p>
                </div>
            </div>
        </div>
            <div className="w-3/5">
                <img className="w-5/6 ml-28" src="/karta.png" alt="Karta" />
            </div>
        </div>
    </div>
    );
}

export default Bostad;