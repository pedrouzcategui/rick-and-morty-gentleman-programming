import { Character } from "../types";
import { AiOutlineSmile } from "react-icons/ai";
import {TbMoodCrazyHappy} from "react-icons/tb";
import {GiHalfDead} from "react-icons/gi";
import {BsGenderMale, BsGenderFemale} from "react-icons/bs";
import {RiAliensLine} from "react-icons/ri";

export default function CharacterCard({ name, status, species, type, gender, image, episode }: Character): JSX.Element {
    return (
        <div className={`border-4 ${status == "Alive" ? "border-lime-500" : (status == "Dead") ? "border-red-600" : "border-gray-900"} shadow-xl transition-all bg-slate-900 rounded-md animate-slideup hover:scale-105 cursor-pointer`}>
            <img src={image} alt={name} className="w-full" />
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#8bcf21]">{name}</span>
                    <span className="text-white">{(status == "Alive") ? <AiOutlineSmile color="8bcf21"/> : 
                                    (status == "Dead") ? <TbMoodCrazyHappy color="red"/> : <GiHalfDead/>
                    }</span>
                </div>
                <div>
                    <p className="text-white">{species} {type ? `- ${type}` : ""}</p>
                    <p className="text-white flex items-center justify-between">{gender} 
                        {gender == "Male" ? <BsGenderMale color="blue"/>  : 
                        (gender == "Female") ? <BsGenderFemale color="pink"/> : 
                        (gender == "unknown") ? <RiAliensLine/> : ""} 
                    </p>
                    <p className="text-gray-400">{episode.length} {episode.length > 1 ? "episodes" : "episode"}</p>
                </div>
            </div>
        </div>
    )
}