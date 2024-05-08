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
import { Drawer } from "@mui/material";
import { Navigations } from "./components/navigations";
import { Reorder } from "@mui/icons-material";

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer: any = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <BoxHeader>
      <ContainerHeader>
        <BoxNavigation>
          <ButtonNavigation onClick={toggleDrawer(true)}>
            <Reorder />
          </ButtonNavigation>
          <Title>All Gym</Title>
        </BoxNavigation>
        {/* <BoxPages>
          <Link to="">Montar treino</Link>
        </BoxPages> */}
      </ContainerHeader>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{ style: { backgroundColor: "#4f4f4f" } }}
      >
        <Navigations onClose={() => toggleDrawer(false)} />
      </Drawer>
    </BoxHeader>
  );
}
