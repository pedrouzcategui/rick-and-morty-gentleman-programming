import { useState, useEffect } from "react";
import { APIResponse } from "../types";
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
            console.clear();
            setSearchCharacters({info: {}, results: []});
        }
    }

    useEffect(() => {
        fetchSearchCharacter();
    }, [searchTerm] );

    return {searchCharacters, searchTerm, setSearchTerm};
}
