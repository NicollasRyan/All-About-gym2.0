import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteField,
  deleteDoc,
} from "firebase/firestore";

import {
  BoxCard,
  ButtonMore,
  TitleWorkout,
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

import { BackWork } from "../components/workout/BackWork";
import { BicepsWork } from "../components/workout/BicepsWork";
import { ChestWork } from "../components/workout/ChestWork";
import { LegWork } from "../components/workout/LegWork";
import { RestWork } from "../components/workout/RestWork";
import { ShoulderWork } from "../components/workout/ShouderWork/inde";
import { TricepsWork } from "../components/workout/TricepsWork";
import { ButtonOpenModals } from "../components/ButtonOpenModals";

export function SundayWorkout() {
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

  const trainingId = "sunday_training";

  useEffect(() => {
    fetchTrainingDocuments();
  }, [trainingId]);

  const fetchTrainingDocuments = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Usuário não autenticado");
      return;
    }

    const userEmail = user.email ?? ""

    try {
      const docRef = doc(db, "user", userEmail, "trainings", trainingId);
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

  const handleDelete = async (field: string) => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Usuário não autenticado");
      return;
    }

    const userEmail = user.email ?? ""

    try {
      const trainingDocRef = doc(db, "user", userEmail, "trainings", trainingId);
      await updateDoc(trainingDocRef, {
        [field]: deleteField(),
      });
      fetchTrainingDocuments();
    } catch (error) {
      console.error("Erro ao deletar campo:", error);
    }
  };

  const onSubmit = async (data: any) => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Usuário não autenticado");
      return;
    }

    const userEmail = user.email ?? "";
    const userForm = { ...data };
    const cleanedUserForm = removeUndefinedFields(userForm);

    const docRef = doc(db, "user", userEmail, "trainings", trainingId);

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

  const handleAddRest = async (data: any) => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Usuário não autenticado");
      return;
    }
    const userEmail = user.email ?? "";

    const docRef = doc(db, "user", userEmail, "trainings", trainingId);

    try {
      await deleteDoc(docRef);
      console.log("Documento de quarta-feira apagado");

      await setDoc(docRef, data);
      console.log("Descanso adicionado com sucesso");

    } catch (error) {
      console.error("Erro ao adicionar descanso:", error);
    }
  };

  const handleMore = () => {
    if (addTraining === false) {
      setAddTraining(true);
    } else {
      setAddTraining(false);
    }
  };

  return (
    <Container>
      <TitleWorkout>Treino de Domingo</TitleWorkout>
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
        <ButtonOpenModals
          handleOpenRest={handleOpenRest}
          handleOpenShoulder={handleOpenShoulder}
          handleOpenChest={handleOpenChest}
          handleOpenBack={handleOpenBack}
          handleOpenBiceps={handleOpenBiceps}
          handleOpenTriceps={handleOpenTriceps}
          handleOpenLeg={handleOpenLeg}
          training={training}
          trainingId={trainingId}
        />
      )}

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
        handleTraining={handleAddRest}
      />
    </Container>
  );
}
