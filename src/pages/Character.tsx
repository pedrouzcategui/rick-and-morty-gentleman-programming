import { Link } from "react-router-dom"
import Logo from "../assets/rick-and-morty-logo.png";
import useCharacter from "../hooks/useCharacter";
import { useParams, useNavigate } from "react-router-dom";

export default function Character(): JSX.Element {

    let { characterID } = useParams();
    const { character } = useCharacter(characterID);
    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-r from-[#24325F] to-gray-900 w-full min-h-screen text-center">
            <Link to={"/"}>
                <div className="flex ml-4 justify-start md:justify-content-center items-center">
                    <img src={Logo} alt="Rick And Morty Logo" className="w-2/3 mx-auto md:w-1/6" />
                </div>
            </Link>
            {
                character && (
                    <div className={`bg-slate-900 ${character.status == "Alive" ? "border-lime-500" : (character.status == "Dead") ? "border-red-600" : "border-gray-900"} border-4 rounded-lg p-6 mx-auto flex flex-col md:items-center md:w-2/4 lg:flex-row gap-5 w-2/3`}>
                        <div className="flex items-center">
                            <img src={character?.image}
                                alt={character?.name}
                                className="rounded"
                            />
                        </div>
                        <div className="text-left flex flex-col justify-center">
                            <h3 className="text-5xl mb-4 text-white font-bold">{character?.name}</h3>
                            <p className="text-2xl text-gray-300"><b>Status:</b> {character?.status}</p>
                            <p className="text-2xl text-gray-300"><b>Species:</b> {character?.species}</p>
                            <p className="text-2xl text-gray-300"><b>Gender:</b> {character?.gender}</p>
                            {
                                character?.type ? (<p className="text-2xl text-gray-300"><b>Type:</b> {character?.type}</p>) : ""
                            }
                            <p className="text-2xl text-gray-300">Last Seen In <b>{character?.location.name}</b></p>
                            <p className="text-lg text-gray-400 mt-4">{character?.name} has appeared in {character?.episode.length} {character.episode.length > 1 ? "episodes" : "episode"}.</p>
                        </div>
                    </div>
                )
            }
            <button className="p-2 mx-2 border-2 border-[#8bcf21] bg-slate-900 text-white rounded-md mt-4" onClick={() => navigate(-1)}>
                Go back
            </button>
        </div>
    )
}