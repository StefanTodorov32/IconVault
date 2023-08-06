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