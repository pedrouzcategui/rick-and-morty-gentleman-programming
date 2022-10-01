import { useState } from "react";
import useSearchCharacters from "../hooks/useSearchCharacters";
import { Character } from "../types";
import { Link } from "react-router-dom";

export default function SearchBar(): JSX.Element {

    const { searchCharacters, setSearchTerm, searchTerm } = useSearchCharacters();
    const [focus, setFocus] = useState<boolean>(false);

    function handleSearch(event: React.KeyboardEvent<HTMLInputElement>) {
        setSearchTerm((event.target as HTMLInputElement).value);
    }

    function handleFocusBlur(isFocused: boolean) {
        setFocus(isFocused);
    }

    return (
        <div className="relative w-4/5 md:w-2/3"
            onFocus={() => handleFocusBlur(true)}
        >
            <input
                onKeyUp={(e) => handleSearch(e)}
                className="w-full rounded-lg bg-slate-900 border-[#333333] p-2 border-2 text-white outline-[#8bcf21]"
                placeholder="Search a Character"
                type="search" />

            {
                ((searchCharacters.results.length > 0) && (searchTerm != "")) ? (
                    <div className="cursor-pointer absolute w-full h-auto max-h-72 z-50 overflow-y-scroll">
                        {
                            searchCharacters.results.map((character: Character) => (
                                <Link key={`Rick-And-Morty-Search-Card-${character.id}`} to={`/character/${character.id}`}>
                                    <div
                                        className="border-b-2 transition-all flex items-center p-3 result bg-slate-900 
                                    hover:bg-[#5a8515]">
                                        <img className="rounded-lg mr-4" width={40} height={40} src={character.image} />
                                        <p className="m-0 text-white"><b>{character.name}</b> - {character.species}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                ) : ""
            }

        </div>
    )
}