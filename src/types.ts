export type Character = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: string,
    image: string,
    episode: string[],
    url: string,
    created: string,
    location: {
        name: string,
        url: string,
    }
}

export type APIResponse = {
    info?: {
        count?: number,
        pages?: number,
        next?: string,
        prev?: string
    },
    results: Character[];
}