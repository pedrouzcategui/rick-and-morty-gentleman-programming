export type Character = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: string,
    location: string,
    image: string,
    episode: string[],
    url: string,
    created: string;
}

export type Episode = {};
export type Location = {};

export type APIResponse = {
    info?: {
        count?: number,
        pages?: number,
        next?: string,
        prev?: string
    },
    results: Character[];
}