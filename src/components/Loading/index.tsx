import { Box } from "@mui/material";
import { CardLoading } from "./style";

export function Loading() {
    return (
        <Box>
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
        </Box>
    )
}