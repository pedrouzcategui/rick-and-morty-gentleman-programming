import { Character } from "../types";
import useCharacters from '../hooks/useCharacters';
import { Error, Loader, SearchBar, CharacterCard } from "../components";
import Logo from "../assets/rick-and-morty-logo.png";

export default function Home(): JSX.Element {
    // save this into state or characters array in the custom hook
    let { characters, error, loading, setCurrentPage, currentPage } = useCharacters();

    // On Scroll, get more characters or nest it.
    // On Click, get Character Information.
    // Implement useMemo or some cache mechanism to store previously queried answers.
    // Implement responsiveness
    // Implement searchBar with Throtling or Debounce 


    function handleClick(prev?: boolean) {
        if (!prev) {
            setCurrentPage((prevPage) => {
                return prevPage + 1;
            });
        } else {
            setCurrentPage((prevPage) => {
                return prevPage - 1;
            });
        }
    }

    return (
        <div className="bg-gradient-to-r from-[#24325F] to-slate-900">
            <div className="flex flex-col justify-center items-center">
                <img src={Logo} alt="Rick And Morty Logo" className="w-2/4 animate-bouncegently" />
                <SearchBar />

                <div className="mt-4">
                    {
                        currentPage > 1 && (
                            <button className="p-2 mx-2 border-2 border-[#8bcf21] bg-slate-900 text-white rounded-md" onClick={() => handleClick(true)}> {/* Instead of button, should be scroll, and also prevent re-render of previous components */}
                                 Prev ({currentPage - 1})
                            </button>
                        )
                    }

                    <span className="bg-lime-500 border-2 font-bold border-slate-900 text-slate-900 rounded-md  p-2">{currentPage}</span>

                    <button className="p-2 mx-2 border-2 border-[#8bcf21] bg-slate-900 text-white rounded-md" onClick={() => handleClick()}> {/* Instead of button, should be scroll, and also prevent re-render of previous components */}
                        Go to page {currentPage + 1}
                    </button>

                </div>

            </div>

            {
                characters.length > 0 && (
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 p-12"> {/*Convert into a grid component or something? */}
                        {characters.map((character: Character) => ( // Refactor this into a Character Component. ✅
                            <CharacterCard key={"Rick-And-Morty-Character-" + character.id} {...character} />
                        ))}
                    </div>
                )
            }

        </div>
    )
}