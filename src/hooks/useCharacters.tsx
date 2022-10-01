import { useState, useEffect } from "react";
import { BASE_URL } from "../assets/constants";
import { Character } from "../types";

export default function useCharacters() {
    let [characters, setCharacters] = useState<Character[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    let [currentPage, setCurrentPage] = useState<number>(1)

    const fetchCharacters = async () => {
        setLoading(true);
        try {
            const response = await fetch(BASE_URL + "/character" + (currentPage > 1 ? "?page="+currentPage : ""));
            const data = await response.json();
            setCharacters(data.results); // Probably here we should use some sort of call back and previous states
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {

        fetchCharacters();

    }, [currentPage]); // The dependency array is going to receive other variables, it means: Please Re-Run the effect when this value changes!

    return {characters, error, loading, currentPage, fetchCharacters, setCurrentPage}; // Return an object, because arrays actually can be of 2 types and that is an error difficult to handle with TypeScript.
}
