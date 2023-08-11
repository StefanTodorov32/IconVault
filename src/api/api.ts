import { IconCollection, SearchResponse } from "../types/types";

const base_url = "https://api.iconify.design";

export const api = {
    getAllCollections: async (): Promise<[string, IconCollection][]> => {
        try {
            const response = await fetch(`${base_url}/collections`);
            const data = (await response.json()) as {
                [key: string]: IconCollection;
            };

            return Object.entries(data).slice(0, 10);
        } catch (error) {
            return [];
        }
    },
    searchIcons: async (query: string): Promise<SearchResponse | null> => {
        if (query === "") {
            return null;
        }
        const response = await fetch(`${base_url}/search?query=${query}`);
        const data: SearchResponse = await response.json();
        return data;
    },
};
