import { IconCollection } from "../types/types"; 

export const api = {
  getAllCollections: async (): Promise<[string, IconCollection][]> => {
    try {
      const response = await fetch("https://api.iconify.design/collections");
      const data = (await response.json()) as {
        [key: string]: IconCollection
      };

      return Object.entries(data).slice(0, 10);
    } catch (error) {
      return [];
    }
  }
};