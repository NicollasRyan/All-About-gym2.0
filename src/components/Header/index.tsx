import { useState } from "react";
import {
  BoxHeader,
  BoxNavigation,
  BoxPages,
  ButtonNavigation,
  ContainerHeader,
  Title,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Drawer } from "@mui/material";
import { Navigations } from "./components/navigations";
import { Reorder } from "@mui/icons-material";

export function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer: any = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <BoxHeader>
      <ContainerHeader>
        <BoxNavigation>
          <ButtonNavigation onClick={toggleDrawer(true)}>
            <Reorder />
          </ButtonNavigation>
          <Title onClick={handleHome}>All Gym</Title>
        </BoxNavigation>
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
