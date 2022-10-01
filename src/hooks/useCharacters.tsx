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
            setCharacters(data.results);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {

        fetchCharacters();

    }, [currentPage]);

    return {characters, error, loading, currentPage, fetchCharacters, setCurrentPage};
}
