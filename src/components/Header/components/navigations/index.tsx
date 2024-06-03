import { FitnessCenter, Home } from "@mui/icons-material";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { ListItemText } from "./styles";
import { useNavigate } from "react-router";

interface TypeNavigations {
  onClose: any;
}

export function Navigations({ onClose }: TypeNavigations) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{ width: 350, color: "#FFF" }}
      role="presentation"
      onClick={() => onClose(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <Home sx={{ color: "#FFF" }} />
            </ListItemIcon>
            <ListItemText>home</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/weekly-workout")}>
            <ListItemIcon>
              <FitnessCenter sx={{ color: "#FFF" }} />
            </ListItemIcon>
            <ListItemText>Treino</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
}
