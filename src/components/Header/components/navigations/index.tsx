import { FitnessCenter, Home } from "@mui/icons-material";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Divider,
  Typography,
} from "@mui/material";
import { BoxNavigation, ListItemText } from "./styles";
import { useNavigate } from "react-router";

interface TypeNavigations {
  onClose: any;
}

export function Navigations({ onClose }: TypeNavigations) {
  const navigate = useNavigate();

  return (
    <BoxNavigation
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

      <List>Saiba mais sobre:</List>


      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/know-more/muscular-mass")}>
            <ListItemIcon>
              <Typography sx={{ color: "#FFF", fontSize: "20px" }}>💪</Typography>
            </ListItemIcon>
            <ListItemText>Ganho de masssa muscular</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/know-more/weight-loss")}>
            <ListItemIcon>
              <Typography sx={{ color: "#FFF", fontSize: "20px" }}>💪</Typography>
            </ListItemIcon>
            <ListItemText>Perca de peso</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </BoxNavigation>
  );
}
