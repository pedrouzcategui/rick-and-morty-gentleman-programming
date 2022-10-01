// Convert logic into custom hook ✅
import { Character } from "../types";

// Implement the <> thing on this component.
export default function CharacterCard({ name, status, species, type, gender, origin, location, image, episode, url, created }: Character): JSX.Element {
    return (
        <div className="border-lime-500 border-4 shadow-xl transition-all bg-slate-900 rounded-md animate-slideup hover:scale-105 cursor-pointer"> {/* bg-[#8bcf21]*/}
            <img src={image} alt={name} className="w-full" />
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#8bcf21]">{name}</span>
                    {/* If alive, then maybe the card is different. */}
                    <span className="text-white">{status}</span>
                </div>
                <div>
                    {/*Change icons for the species*/}
                    <p className="text-white">{species}</p>
                    <p className="text-white">{type}</p>
                    <p className="text-white">{gender}</p>
                    <p className="text-gray-400">{episode.length} {episode.length > 1 ? "episodes" : "episode"}</p>
                </div>
            </div>
        </div>
    )
}