import { useContext } from "react";
import { IconContext } from "../../contexts/IconContext";
import { Stack } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
export const IconList = () => {
    const { searchIcons } = useContext(IconContext);
    return (
        <Stack flexDirection="row" width="full">
            {searchIcons?.icons.map((icon) => (
                <div>
                    <Icon icon={icon} key={icon} />
                </div>
            ))}
        </Stack>
    );
};
