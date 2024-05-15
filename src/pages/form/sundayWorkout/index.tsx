import { Container, Box } from "@mui/material";
import React from "react";
import { BoxAddTraning, ButtonAdd, TextWoukout, TitleWorkout } from "./styles";
import { ModalForm } from "./Modals/ModalForm";
import { Chest } from "./Modals/Chest";

export function SundayWorkout() {
  const [openShoulder, setOpenShoulder] = React.useState(false);
  const [openChest, setOpenChest] = React.useState(false);
  const [openBack, setOpenBack] = React.useState(false);
  const [openBiceps, setOpenBiceps] = React.useState(false);
  const [openTriceps, setOpenTriceps] = React.useState(false);
  const [openLeg, setOpenLeg] = React.useState(false);

  const handleOpenShoulder = () => setOpenShoulder(true);
  const handleCloseShoulder = () => setOpenShoulder(false);

  const handleOpenChest = () => setOpenChest(true);
  const handleCloseChest = () => setOpenChest(false);

  const handleOpenBack = () => setOpenBack(true);
  const handleCloseBack = () => setOpenBack(false);

  const handleOpenBiceps = () => setOpenBiceps(true);
  const handleCloseBiceps = () => setOpenBiceps(false);

  const handleOpenTriceps = () => setOpenTriceps(true);
  const handleCloseTriceps = () => setOpenTriceps(false);

  const handleOpenLeg = () => setOpenLeg(true);
  const handleCloseLeg = () => setOpenLeg(false);

  const sundayTraining: any[] = [];

  return (
    <Container>
      {sundayTraining ? (
        <Box>
          <TitleWorkout>Monte seu treino de Domingo:</TitleWorkout>

          <BoxAddTraning>
            <TextWoukout>
              Pelo visto você ainda não adicionou seu treino.
            </TextWoukout>
            <ButtonAdd onClick={handleOpenShoulder}>ombro</ButtonAdd>
            <ButtonAdd onClick={handleOpenChest}>Peito</ButtonAdd>
            <ButtonAdd onClick={handleOpenBack}>Costas</ButtonAdd>
            <ButtonAdd onClick={handleOpenBiceps}>biceps</ButtonAdd>
            <ButtonAdd onClick={handleOpenTriceps}>triceps</ButtonAdd>
            <ButtonAdd onClick={handleOpenLeg}>Pernas</ButtonAdd>
          </BoxAddTraning>
          {/* <ModalForm open={open} handleClose={handleClose} /> */}
          <Chest openChest={openChest} handleClose={handleCloseChest} />
          {/* <Shoulder
            openShoulder={openShoulder}
            handleClose={handleCloseShoulder}
          />
          <Back openBack={openBack} handleClose={handleCloseBack} />
          <Triceps openTriceps={openTriceps} handleClose={handleCloseTriceps} />
          <Biceps openBiceps={openBiceps} handleClose={handleCloseBiceps} />
          <Leg openLeg={openLeg} handleClose={handleCloseLeg} /> */}
        </Box>
      ) : (
        <TitleWorkout>Treino de Domingo</TitleWorkout>
      )}
    </Container>
  );
}
