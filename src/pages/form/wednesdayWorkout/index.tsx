import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";

import {
  BoxCard,
  ButtonAdd,
  ButtonMore,
  TitleWorkout,
  TextMotivational,
} from "../styles";

import { Chest } from "../components/Modals/Chest";
import { Back } from "../components/Modals/Back";
import { Shoulder } from "../components/Modals/Shoulder";
import { Biceps } from "../components/Modals/Biceps";
import { Triceps } from "../components/Modals/Triceps";
import { Leg } from "../components/Modals/Leg";
import { Rest } from "../components/Modals/Rest";

import { auth, db } from "../../../firebase";
import { removeUndefinedFields, TypeTraining } from "../../../Hooks";

import { BackWork } from "../components/BackWork";
import { BicepsWork } from "../components/BicepsWork";
import { ChestWork } from "../components/ChestWork";
import { LegWork } from "../components/LegWork";
import { RestWork } from "../components/RestWork";
import { ShoulderWork } from "../components/ShouderWork/inde";
import { TricepsWork } from "../components/TricepsWork";

export function WednesdayWorkout() {
  const [training, setTraining] = useState<TypeTraining[]>([]);
  const [addTraining, setAddTraining] = useState(false);

  const [openShoulder, setOpenShoulder] = useState(false);
  const [openChest, setOpenChest] = useState(false);
  const [openBack, setOpenBack] = useState(false);
  const [openBiceps, setOpenBiceps] = useState(false);
  const [openTriceps, setOpenTriceps] = useState(false);
  const [openLeg, setOpenLeg] = useState(false);
  const [openRest, setOpenRest] = useState(false);

  const handleCloseRest = () => setOpenRest(false);
  const handleOpenRest = () => setOpenRest(true);

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

  const trainingId = "wednesday_training";

  const fetchTrainingDocuments = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Usuário não autenticado");
      return;
    }

    try {
      const docRef = doc(db, "user", user.uid, "trainings", trainingId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const trainingData = { id: docSnap.id, ...docSnap.data() };
        setTraining([trainingData]);
      } else {
        console.log("Nenhum documento encontrado.");
      }
    } catch (error) {
      console.error("Erro ao obter documento:", error);
    }
  };

  useEffect(() => {
    fetchTrainingDocuments();
  }, [trainingId]);

  const handleDelete = async (field: string, value: string) => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Usuário não autenticado");
      return;
    }

    try {
      const trainingDocRef = doc(db, "user", user.uid, "trainings", trainingId);
      await updateDoc(trainingDocRef, {
        [field]: deleteField(),
      });
      fetchTrainingDocuments();
    } catch (error) {
      console.error("Erro ao <Delete /> campo:", error);
    }
  };

  const onSubmit = async (data: any) => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Usuário não autenticado");
      return;
    }

    const userUid = user.uid;
    const userForm = { ...data };
    const cleanedUserForm = removeUndefinedFields(userForm);

    const docRef = doc(db, "user", userUid, "trainings", trainingId);

    setAddTraining(false);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await updateDoc(docRef, cleanedUserForm);
        fetchTrainingDocuments();
      } else {
        await setDoc(docRef, cleanedUserForm);
        console.log("Novo treino criado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    }
  };

  const handleMore = () => {
    if (addTraining === false) {
      setAddTraining(true);
    } else {
      setAddTraining(false);
    }
  };

  const dayTraining = training.find(
    (trainingItem) => trainingItem.id === trainingId
  );

  return (
    <Container>
      <TitleWorkout>Treino de Quarta-feira</TitleWorkout>
      {training.map((workout) => (
        <BoxCard key={workout.id}>
          <RestWork workout={workout} handleDelete={handleDelete} />
          <ShoulderWork workout={workout} handleDelete={handleDelete} />
          <BackWork workout={workout} handleDelete={handleDelete} />
          <ChestWork workout={workout} handleDelete={handleDelete} />
          <BicepsWork workout={workout} handleDelete={handleDelete} />
          <TricepsWork workout={workout} handleDelete={handleDelete} />
          <LegWork workout={workout} handleDelete={handleDelete} />
        </BoxCard>
      ))}
      {!training.some((trainingItem) => trainingItem.rest) && (
        <ButtonMore onClick={handleMore}>
          {addTraining ? "Cancelar" : "Adiconar exercios"}
        </ButtonMore>
      )}

      {addTraining && (
        <Grid container spacing={2}>
          {dayTraining && Object.keys(dayTraining).length === 1 && (
            <Grid item sm={12} md={6}>
              <ButtonAdd onClick={handleOpenRest}>Descansar</ButtonAdd>
            </Grid>
          )}
          <Grid item sm={12} md={6}>
            <ButtonAdd onClick={handleOpenShoulder}>ombro</ButtonAdd>
          </Grid>
          <Grid item sm={12} md={6}>
            <ButtonAdd onClick={handleOpenChest}>Peito</ButtonAdd>
          </Grid>
          <Grid item sm={12} md={6}>
            <ButtonAdd onClick={handleOpenBack}>Costas</ButtonAdd>
          </Grid>
          <Grid item sm={12} md={6}>
            <ButtonAdd onClick={handleOpenBiceps}>biceps</ButtonAdd>
          </Grid>
          <Grid item sm={12} md={6}>
            <ButtonAdd onClick={handleOpenTriceps}>triceps</ButtonAdd>
          </Grid>
          <Grid item sm={12} md={6}>
            <ButtonAdd onClick={handleOpenLeg}>Pernas</ButtonAdd>
          </Grid>
        </Grid>
      )}

      <TextMotivational>
        A única mágica que você precisa é a sua determinação.
      </TextMotivational>

      <Chest
        openChest={openChest}
        handleClose={handleCloseChest}
        handleTraining={onSubmit}
      />
      <Shoulder
        openShoulder={openShoulder}
        handleClose={handleCloseShoulder}
        handleTraining={onSubmit}
      />
      <Back
        openBack={openBack}
        handleClose={handleCloseBack}
        handleTraining={onSubmit}
      />
      <Triceps
        openTriceps={openTriceps}
        handleClose={handleCloseTriceps}
        handleTraining={onSubmit}
      />
      <Biceps
        openBiceps={openBiceps}
        handleClose={handleCloseBiceps}
        handleTraining={onSubmit}
      />
      <Leg
        openLeg={openLeg}
        handleClose={handleCloseLeg}
        handleTraining={onSubmit}
      />

      <Rest
        openRest={openRest}
        handleClose={handleCloseRest}
        handleTraining={onSubmit}
      />
    </Container>
  );
}
