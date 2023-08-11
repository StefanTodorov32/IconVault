import { TextField } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { SearchResponse } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";
import { IconContext } from "../../contexts/IconContext";
export const Header = () => {
    const { setSearchIcons } = useContext(IconContext);
    const [query, setQuery] = useState<string>("");
    const { data } = useQuery<SearchResponse | null>({
        queryKey: ["searchIcons", query],
        queryFn: () => api.searchIcons(query),
    });
    useEffect(() => {
        if (data) {
            setSearchIcons(data);
        }
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
