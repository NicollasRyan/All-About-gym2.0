import {
  DinnerDining,
  FitnessCenter,
  Home,
  LocalDining,
  SportsGymnastics,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Divider,
  Typography,
} from "@mui/material";
import { BoxNavigation, ListItemText, Text } from "./styles";
import { useNavigate } from "react-router";

interface TypeNavigations {
  onClose: any;
}

export function Navigations({ onClose }: TypeNavigations) {
  const navigate = useNavigate();

  return (
    <BoxNavigation role="presentation" onClick={() => onClose(false)}>
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
            <ListItemText>Veja seu treino</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemText sx={{ marginLeft: "35px" }}>
            Saiba mais sobre:
          </ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/know-more/muscular-mass")}>
            <ListItemIcon>
              <Typography sx={{ color: "#FFF", fontSize: "20px" }}>
                <DinnerDining />
              </Typography>
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
              <Typography sx={{ color: "#FFF", fontSize: "20px" }}>
                <LocalDining />
              </Typography>
            </ListItemIcon>
            <ListItemText>Perca de peso</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate("/know-more/resistance-training")}
          >
            <ListItemIcon>
              <Typography sx={{ color: "#FFF", fontSize: "20px" }}>
                <SportsGymnastics />
              </Typography>
            </ListItemIcon>
            <ListItemText>Treinos de resistência</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate("/know-more/strength-training")}
          >
            <ListItemIcon>
              <Typography sx={{ color: "#FFF", fontSize: "20px" }}>
                <FitnessCenter />
              </Typography>
            </ListItemIcon>
            <ListItemText>Treinos de força</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />

      <Text>© 2024 AllGym.</Text>
    </BoxNavigation>
  );
}
