import { TextField } from "@mui/material";
import { SearchResponse } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";
import { useState } from "react";
export const Header = () => {
    const [query, setQuery] = useState<string>("");
    const { data: searchIcons } = useQuery<SearchResponse>({
        queryKey: ["searchIcons"],
        queryFn: () => api.searchIcons(query),
        enabled: query.length > 0,
    });

    return (
        <div
            style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
            }}
        >
            <TextField
                variant="outlined"
                color="primary"
                placeholder="Search for an Icon"
                sx={{
                    width: "500px",
                }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};
