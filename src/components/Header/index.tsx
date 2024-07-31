import { useState, MouseEvent, useEffect } from "react";
import {
  BoxHeader,
  BoxNavigation,
  BoxPages,
  ButtonMenu,
  ButtonNavigation,
  ContainerHeader,
  TextName,
  Title,
} from "./styles";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Navigations } from "./components/navigations";
import { AccountCircle, Reorder } from "@mui/icons-material";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { auth, db } from "../../firebase";

export function Header() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);

 
      const auth = getAuth();
      const user = auth.currentUser;
      const name = user?.displayName;

    


  const toggleDrawer: any = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
      setAnchorEl(null);
    } catch (error) {
      console.error('Erro ao fazer logout: ', error);
    }
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
        <Tooltip title="Open settings">
          <IconButton onClick={handleMenu} sx={{ p: 0 }}>
            <AccountCircle sx={{ fontSize: "40px", color: "#fff" }} />
          </IconButton>
        </Tooltip>
      </ContainerHeader>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{ style: { backgroundColor: "#4f4f4f" } }}
      >
        <Navigations onClose={() => toggleDrawer(false)} />
      </Drawer>
      <Box>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <TextName>Olá {name}</TextName>
          <ButtonMenu onClick={handleLogout}>Sair</ButtonMenu>
        </Menu>
      </Box>
    </BoxHeader>
  );
}
