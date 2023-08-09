import type { IconifyInfo } from '@iconify/types';

interface Author {
    name: string;
    url: string;
}

interface License {
    title: string;
    spdx: string;
    url: string;
}

export interface IconCollection {
    name: string;
    total: number;
    author: Author;
    license: License;
    samples: string[];
    height: number;
    category: string;
    palette: boolean;
}

export interface SearchResponse {
   icons: string[];
   total: number;
   limit: number;
   start: number;
   collections: Record<string, IconifyInfo>;
}