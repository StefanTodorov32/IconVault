import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IconProvider } from "./contexts/IconContext";

const queryClient = new QueryClient();

const theme = createTheme({
    palette: {
        primary: {
            main: "#2F7ECB",
            light: "#3999f7",
            dark: "#1b4670",
            contrastText: "#fff",
        },
        secondary: {
            main: "#ff0000",
            light: "#da0000",
            dark: "#ff5436",
            contrastText: "#000",
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <IconProvider>
                    <App />
                </IconProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
