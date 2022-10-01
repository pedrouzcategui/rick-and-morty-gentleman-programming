import { useState, useEffect } from "react";
import { BASE_URL } from "../assets/constants";
import { Character } from "../types";

export default function useCharacter(character_id?: string) {
    let [character, setCharacter] = useState<Character>();
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchCharacter = async () => {
        setLoading(true);
        try {
            const response = await fetch(BASE_URL + "/character/" + character_id);
            const data = await response.json();
            setCharacter(data); 
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {

        fetchCharacter();

    });

    return {character, error, loading}; 
}
