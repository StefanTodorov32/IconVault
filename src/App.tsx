import "./App.css";
import { ListItem, Stack } from "@mui/material";
import { Header } from "./components/Header/Header";
import { Collections } from "./components/Collections/Collections";
import { IconList } from "./components/IconList/IconList";

function App() {
    return (
        <Stack alignItems="center" mt={4}>
            <Header />
            <Stack flexDirection="row" gap={2} p={4} width="100%">
                <ListItem>
                    <Collections />
                </ListItem>
                <ListItem>
                    <IconList />
                </ListItem>
                <ListItem></ListItem>
            </Stack>
        </Stack>
    );
}

export default App;
