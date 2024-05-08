import { FitnessCenter } from "@mui/icons-material";
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

interface TypeNavigations {
  onClose: any;
}

export function Navigations({ onClose }: TypeNavigations) {
  return (
    <Box
      sx={{ width: 350, color: "#FFF" }}
      role="presentation"
      onClick={() => onClose(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FitnessCenter sx={{ color: "#FFF" }} />
            </ListItemIcon>
            <ListItemText>Montar Treino</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText>Tecnicas </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
