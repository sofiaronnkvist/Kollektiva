import Image from 'next/image'

function SearchBar() {
    return(
        <div className="mt-3 w-3/6 justify-between flex gap-4 border-solid border border-gray-800 rounded-full py-2 px-4">
            <div className="flex flex-col">
                <label htmlFor="stad">Stad</label>
                <input type="text" name="stad" id="stad" placeholder="Vilken stad?"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="inflytt">Inflytt</label>
                <input type="text" name="inflytt" id="inflytt" placeholder="När sker inflytt?"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="boende">Boende</label>
                <input type="text" name="boende" id="boende" placeholder="Vad för typ av boende?"/>
            </div>
            <div className='self-end'>
                <button><Image src="/searchbutton.png" alt='search button' width="45" height="45"/></button>
            </div>
        </div>
    )
}

export default SearchBar