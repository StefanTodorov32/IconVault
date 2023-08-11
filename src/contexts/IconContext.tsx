import { createContext, useState } from "react";
import { SearchResponse } from "../types/types";

interface IconProviderProps {
    children: React.ReactNode;
}

interface IconContextProps {
    searchIcons: SearchResponse | undefined;
    setSearchIcons: React.Dispatch<React.SetStateAction<SearchResponse | undefined>>;
}

export const IconContext = createContext<IconContextProps>(
    {} as IconContextProps
);

export function IconProvider({ children }: IconProviderProps) {
    const [searchIcons, setSearchIcons] = useState<SearchResponse>();
    return <IconContext.Provider value={{searchIcons, setSearchIcons}}>{children}</IconContext.Provider>;
}
