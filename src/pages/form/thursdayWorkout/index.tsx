import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { BoxCard, ButtonAdd, ButtonDelete, ButtonMore, CardRest, CardTraining, TitleWorkout, Text } from "../styles";

import { Chest } from "./Modals/Chest";
import { Back } from "./Modals/Back";
import { Shoulder } from "./Modals/Shoulder";
import { Biceps } from "./Modals/Biceps";
import { Triceps } from "./Modals/Triceps";
import { Leg } from "./Modals/Leg";
import { auth, db } from "../../../firebase";
import { Rest } from "./Modals/Rest";
import { handleDeleteByField, removeUndefinedFields, TypeTraining } from "../../../Hooks";

export function ThursdayWorkout() {
  const [training, setTraining] = useState<TypeTraining[]>([]);
  const [addTraining, setAddTraining] = useState(true);

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

  const trainingId = 'thursday_training';

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
    const hasTraining = Object.values(training).some(value => value !== null && value !== undefined);
    setAddTraining(!hasTraining);
  }, [trainingId, training])

  const handleDelete = async (field: string, value: string) => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Usuário não autenticado");
      return;
    }

    try {
      await handleDeleteByField(user.uid, trainingId, field, value);
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

  return (
    <Container>
      <TitleWorkout>Treino de Quinta-feira</TitleWorkout>
      {training.map((workout) => (
        <BoxCard key={workout.id}>
          {workout.rest && (
            <CardRest>
              <Text>{workout.rest}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.rest) {
                    handleDelete("rest", workout.rest);
                  }
                }}
              >
                Delatar
              </ButtonDelete>
            </CardRest>
          )}
          {/* Costas */}
          {workout.HighPull && (
            <CardTraining>
              <Text>{workout.HighPull}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.HighPull) {
                    handleDelete("HighPull", workout.HighPull);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.SupinatedHighGripPulldown && (
            <CardTraining>
              <Text>{workout.SupinatedHighGripPulldown}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.SupinatedHighGripPulldown) {
                    handleDelete("SupinatedHighGripPulldown", workout.SupinatedHighGripPulldown);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.TrianglePull && (
            <CardTraining>
              <Text>{workout.TrianglePull}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.TrianglePull) {
                    handleDelete("TrianglePull", workout.TrianglePull);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.NeutralGripHighPull && (
            <CardTraining>
              <Text>{workout.NeutralGripHighPull}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.NeutralGripHighPull) {
                    handleDelete("NeutralGripHighPull", workout.NeutralGripHighPull);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.InclineRow && (
            <CardTraining>
              <Text>{workout.InclineRow}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.InclineRow) {
                    handleDelete("InclineRow", workout.InclineRow);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.RowingTriangleMachine && (
            <CardTraining>
              <Text>{workout.RowingTriangleMachine}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.RowingTriangleMachine) {
                    handleDelete("RowingTriangleMachine", workout.RowingTriangleMachine);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.InclineLeverRow && (
            <CardTraining>
              <Text>{workout.InclineLeverRow}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.InclineLeverRow) {
                    handleDelete("InclineLeverRow", workout.InclineLeverRow);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.RowingMachine && (
            <CardTraining>
              <Text>{workout.RowingMachine}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.RowingMachine) {
                    handleDelete("RowingMachine", workout.RowingMachine);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.InclineRowSupinatedGrip && (
            <CardTraining>
              <Text>{workout.InclineRowSupinatedGrip}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.InclineRowSupinatedGrip) {
                    handleDelete("InclineRowSupinatedGrip", workout.InclineRowSupinatedGrip);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.RowingSupinatedGripMachine && (
            <CardTraining>
              <Text>{workout.RowingSupinatedGripMachine}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.RowingSupinatedGripMachine) {
                    handleDelete("RowingSupinatedGripMachine", workout.RowingSupinatedGripMachine);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.Saw && (
            <CardTraining>
              <Text>{workout.Saw}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.Saw) {
                    handleDelete("Saw", workout.Saw);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.Pulldown && (
            <CardTraining>
              <Text>{workout.Pulldown}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.Pulldown) {
                    handleDelete("Pulldown", workout.Pulldown);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}
          {/* Biceps */}
          {workout.DumbbellCurl && (
            <CardTraining>
              <Text>{workout.DumbbellCurl}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.DumbbellCurl) {
                    handleDelete("DumbbellCurl", workout.DumbbellCurl);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.WBarCurl && (
            <CardTraining>
              <Text>{workout.WBarCurl}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.WBarCurl) {
                    handleDelete("WBarCurl", workout.WBarCurl);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.HammerThread && (
            <CardTraining>
              <Text>{workout.HammerThread}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.HammerThread) {
                    handleDelete("HammerThread", workout.HammerThread);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.InclineDumbbellCurl && (
            <CardTraining>
              <Text>{workout.InclineDumbbellCurl}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.InclineDumbbellCurl) {
                    handleDelete("InclineDumbbellCurl", workout.InclineDumbbellCurl);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.PreacherBench && (
            <CardTraining>
              <Text>{workout.PreacherBench}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.PreacherBench) {
                    handleDelete("PreacherBench", workout.PreacherBench);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {/* Peito */}
          {workout.BenchPress && (
            <CardTraining>
              <Text>{workout.BenchPress}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.BenchPress) {
                    handleDelete("BenchPress", workout.BenchPress);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.InclineBenchPress && (
            <CardTraining>
              <Text>{workout.InclineBenchPress}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.InclineBenchPress) {
                    handleDelete("InclineBenchPress", workout.InclineBenchPress);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.DeclineBenchPress && (
            <CardTraining>
              <Text>{workout.DeclineBenchPress}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.DeclineBenchPress) {
                    handleDelete("DeclineBenchPress", workout.DeclineBenchPress);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.HighPulleyCross && (
            <CardTraining>
              <Text>{workout.HighPulleyCross}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.HighPulleyCross) {
                    handleDelete("HighPulleyCross", workout.HighPulleyCross);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.CrossMediaPulley && (
            <CardTraining>
              <Text>{workout.CrossMediaPulley}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.CrossMediaPulley) {
                    handleDelete("CrossMediaPulley", workout.CrossMediaPulley);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.CrossLowPulley && (
            <CardTraining>
              <Text>{workout.CrossLowPulley}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.CrossLowPulley) {
                    handleDelete("CrossLowPulley", workout.CrossLowPulley);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.Crucifix && (
            <CardTraining>
              <Text>{workout.Crucifix}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.Crucifix) {
                    handleDelete("Crucifix", workout.Crucifix);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.LeaningCrucifix && (
            <CardTraining>
              <Text>{workout.LeaningCrucifix}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.LeaningCrucifix) {
                    handleDelete("LeaningCrucifix", workout.LeaningCrucifix);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {/* Perna */}
          {workout.ExtensionChair && (
            <CardTraining>
              <Text>{workout.ExtensionChair}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.ExtensionChair) {
                    handleDelete("ExtensionChair", workout.ExtensionChair);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.FlexorChair && (
            <CardTraining>
              <Text>{workout.FlexorChair}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.FlexorChair) {
                    handleDelete("FlexorChair", workout.FlexorChair);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.FlexingTable && (
            <CardTraining>
              <Text>{workout.FlexingTable}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.FlexingTable) {
                    handleDelete("FlexingTable", workout.FlexingTable);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.LegPress && (
            <CardTraining>
              <Text>{workout.LegPress}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.LegPress) {
                    handleDelete("LegPress", workout.LegPress);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.AbductorChair && (
            <CardTraining>
              <Text>{workout.AbductorChair}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.AbductorChair) {
                    handleDelete("AbductorChair", workout.AbductorChair);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.AdductorChair && (
            <CardTraining>
              <Text>{workout.AdductorChair}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.AdductorChair) {
                    handleDelete("AdductorChair", workout.AdductorChair);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.Bugaro && (
            <CardTraining>
              <Text>{workout.Bugaro}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.Bugaro) {
                    handleDelete("Bugaro", workout.Bugaro);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.Squat && (
            <CardTraining>
              <Text>{workout.Squat}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.Squat) {
                    handleDelete("Squat", workout.Squat);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.Hack && (
            <CardTraining>
              <Text>{workout.Hack}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.Hack) {
                    handleDelete("Hack", workout.Hack);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.Stiff && (
            <CardTraining>
              <Text>{workout.Stiff}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.Stiff) {
                    handleDelete("Stiff", workout.Stiff);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.Earth && (
            <CardTraining>
              <Text>{workout.Earth}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.Earth) {
                    handleDelete("Earth", workout.Earth);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.Lunge && (
            <CardTraining>
              <Text>{workout.Lunge}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.Lunge) {
                    handleDelete("Lunge", workout.Lunge);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.PelvicLift && (
            <CardTraining>
              <Text>{workout.PelvicLift}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.PelvicLift) {
                    handleDelete("PelvicLift", workout.PelvicLift);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {/* Ombros */}
          {workout.LateralRaise && (
            <CardTraining>
              <Text>{workout.LateralRaise}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.LateralRaise) {
                    handleDelete("LateralRaise", workout.LateralRaise);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.Development && (
            <CardTraining>
              <Text>{workout.Development}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.Development) {
                    handleDelete("Development", workout.Development);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.LateralElevationPulley && (
            <CardTraining>
              <Text>{workout.LateralElevationPulley}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.LateralElevationPulley) {
                    handleDelete(
                      "LateralElevationPulley",
                      workout.LateralElevationPulley
                    );
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.FrontElevation && (
            <CardTraining>
              <Text>{workout.FrontElevation}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.FrontElevation) {
                    handleDelete("FrontElevation", workout.FrontElevation);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.FrontPulleyRaise && (
            <CardTraining>
              <Text>{workout.FrontPulleyRaise}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.FrontPulleyRaise) {
                    handleDelete(
                      "FrontPulleyRaise",
                      workout.FrontPulleyRaise
                    );
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.InvertedCrucifix && (
            <CardTraining>
              <Text>{workout.InvertedCrucifix}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.InvertedCrucifix) {
                    handleDelete(
                      "InvertedCrucifix",
                      workout.InvertedCrucifix
                    );
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {/* Triceps */}
          {workout.TricepsBar && (
            <CardTraining>
              <Text>{workout.TricepsBar}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.TricepsBar) {
                    handleDelete("TricepsBar", workout.TricepsBar);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.TricepsRope && (
            <CardTraining>
              <Text>{workout.TricepsRope}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.TricepsRope) {
                    handleDelete("TricepsRope", workout.TricepsRope);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.French && (
            <CardTraining>
              <Text>{workout.French}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.French) {
                    handleDelete("French", workout.French);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.TricepsForehead && (
            <CardTraining>
              <Text>{workout.TricepsForehead}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.TricepsForehead) {
                    handleDelete(
                      "TricepsForehead",
                      workout.TricepsForehead
                    );
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}

          {workout.TricepsBench && (
            <CardTraining>
              <Text>{workout.TricepsBench}</Text>
              <ButtonDelete
                onClick={() => {
                  if (workout.TricepsBench) {
                    handleDelete("TricepsBench", workout.TricepsBench);
                  }
                }}
              >
                Deletar
              </ButtonDelete>
            </CardTraining>
          )}
        </BoxCard>
      ))}
      {
        !training.some((trainingItem) => trainingItem.rest) && (
          <ButtonMore onClick={handleMore}>
            {addTraining ? "Cancelar" : "Adiconar exercios"}
          </ButtonMore>
        )
      }

      {addTraining && (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ButtonAdd onClick={handleOpenShoulder}>ombro</ButtonAdd>
          </Grid>
          <Grid item xs={6}>
            <ButtonAdd onClick={handleOpenChest}>Peito</ButtonAdd>
          </Grid>
          <Grid item xs={6}>
            <ButtonAdd onClick={handleOpenBack}>Costas</ButtonAdd>
          </Grid>
          <Grid item xs={6}>
            <ButtonAdd onClick={handleOpenBiceps}>biceps</ButtonAdd>
          </Grid>
          <Grid item xs={6}>
            <ButtonAdd onClick={handleOpenTriceps}>triceps</ButtonAdd>
          </Grid>

          <Grid item xs={6}>
            <ButtonAdd onClick={handleOpenLeg}>Pernas</ButtonAdd>
          </Grid>
          <Grid item xs={6}>
            <ButtonAdd onClick={handleOpenRest}>Descanço</ButtonAdd>
          </Grid>
        </Grid>
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
        handleTraining={onSubmit}
      />
    </Container>
  );
}
