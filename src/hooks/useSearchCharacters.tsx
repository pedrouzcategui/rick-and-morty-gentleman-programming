// "https://rickandmortyapi.com/api/character/?name={name}
import { useState, useEffect } from "react";
import { APIResponse, Character } from "../types";
import { BASE_URL } from "../assets/constants";


export default function useSearchCharacters(){
    const [searchCharacters, setSearchCharacters] = useState<APIResponse>({info: {}, results: []});
    const [searchTerm, setSearchTerm] = useState("");

    const fetchSearchCharacter = async () => {
        try {            
            const response = await fetch(`${BASE_URL}/character?name=${searchTerm}`);
            if(response.status == 404){
                throw new Error();
            }
            const data = await response.json();
            setSearchCharacters(data);
        } catch (error) {
            console.clear(); // To not show errors;
            setSearchCharacters({info: {}, results: []});
        }
    }

    useEffect(() => {
        fetchSearchCharacter();
    }, [searchTerm] );

    return {searchCharacters, searchTerm, setSearchTerm};
}
