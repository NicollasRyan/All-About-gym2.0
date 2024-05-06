import { useState } from "react";
import {
  BoxHeader,
  BoxNavigation,
  BoxPages,
  ButtonNavigation,
  ContainerHeader,
  Title,
} from "./styles";
import { Link } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Navigations } from "./components/navigations";

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <BoxHeader>
      <ContainerHeader>
        <BoxNavigation>
          {/* <Reorder /> */}
          <ButtonNavigation onClick={toggleDrawer(true)}>|||</ButtonNavigation>
          <Title>All Gym</Title>
        </BoxNavigation>
        <BoxPages>
          <Link to="">Montar treino</Link>
        </BoxPages>
      </ContainerHeader>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Navigations onClose={() => toggleDrawer(false)} />
      </Drawer>
    </BoxHeader>
  );
}
