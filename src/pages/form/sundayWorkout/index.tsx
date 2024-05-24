import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  getDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

import {
  BoxCard,
  ButtonAdd,
  ButtonMore,
  CardTraining,
  TitleWorkout,
  Text,
  ButtonDelete,
} from "./styles";
import { Chest } from "./Modals/Chest";
import { Back } from "./Modals/Back";
import { Shoulder } from "./Modals/Shoulder";
import { Biceps } from "./Modals/Biceps";
import { Triceps } from "./Modals/Triceps";
import { Leg } from "./Modals/Leg";
import { db } from "../../../firebase";

interface FormData {
  [key: string]: any;
}

interface TypeTraining {
  id?: string;
  // costas
  HighPull?: string;
  SupinatedHighGripPulldown?: string;
  TrianglePull?: string;
  NeutralGripHighPull?: string;
  InclineRow?: string;
  RowingTriangleMachine?: string;
  InclineLeverRow?: string;
  RowingMachine?: string;
  InclineRowSupinatedGrip?: string;
  RowingSupinatedGripMachine?: string;
  Saw?: string;
  Pulldown?: string;
  // biceps
  DumbbellCurl?: string;
  WBarCurl?: string;
  HammerThread?: string;
  InclineDumbbellCurl?: string;
  PreacherBench?: string;
  BenchPress?: string;
  InclineBenchPress?: string;
  DeclineBenchPress?: string;
  HighPulleyCross?: string;
  CrossMediaPulley?: string;
  CrossLowPulley?: string;
  Crucifix?: string;
  LeaningCrucifix?: string;
  // perna
  ExtensionChair?: string;
  FlexorChair?: string;
  FlexingTable?: string;
  LegPress?: string;
  AbductorChair?: string;
  AdductorChair?: string;
  Bugaro?: string;
  Squat?: string;
  Hack?: string;
  Stiff?: string;
  Earth?: string;
  Lunge?: string;
  PelvicLift?: string;
  // ombros
  LateralRaise?: string;
  Development?: string;
  LateralElevationPulley?: string;
  FrontElevation?: string;
  FrontPulleyRaise?: string;
  InvertedCrucifix?: string;
  // triceps
  TricepsBar?: string;
  TricepsRope?: string;
  French?: string;
  TricepsForehead?: string;
  TricepsBench?: string;
}

export function SundayWorkout() {
  const [training, setTraining] = React.useState<TypeTraining[]>([]);
  const [addTrainig, setAddTrainig] = React.useState(false);

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

  useEffect(() => {
    const fetchAllDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sunday_training"));
        const trainingData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        // console.log("<=", trainingData);
        setTraining(trainingData);
      } catch (error) {
        console.error("Erro ao obter documento:", error);
      }
    };

    fetchAllDocuments();
  }, [training]);

  const removeUndefinedFields = (obj: FormData) => {
    const cleanedObj: FormData = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== undefined) {
        cleanedObj[key] = obj[key];
      }
    });
    return cleanedObj;
  };

  const handleMore = () => {
    if (addTrainig === false) {
      setAddTrainig(true);
    } else {
      setAddTrainig(false);
    }
  };

  const onSubmit = async (data: any) => {
    const documentId = "c79M5Hne9QjVAAHcD5Kq";
    const userForm = { ...data };

    const cleanedUserForm = removeUndefinedFields(userForm);

    const docRef = doc(db, "sunday_training", documentId);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await updateDoc(docRef, cleanedUserForm);
        console.log();
      } else {
        await setDoc(docRef, cleanedUserForm);
        console.log("Novo documento criado com os dados no Firestore");
      }
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    }
  };

  const handleDeleteByField = async (field: any, value: any) => {
    try {
      const q = query(
        collection(db, "sunday_training"),
        where(field, "==", value)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docToDelete = querySnapshot.docs[0];
        const docRef = doc(db, "sunday_training", docToDelete.id);
        await updateDoc(docRef, {
          [field]: "",
        });
        console.log("Field successfully deleted!");
      } else {
        console.log("No matching documents found.");
      }
    } catch (error) {
      console.error("Error removing field: ", error);
    }
  };

  return (
    <Container>
      <TitleWorkout>Treino de Domingo</TitleWorkout>
      {training.map((workout) => (
        <BoxCard key={workout.id}>
          {/* Costas */}
          {workout.HighPull && (
            <CardTraining>
              <Text>{workout.HighPull}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("HighPull", workout.HighPull)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.SupinatedHighGripPulldown && (
            <CardTraining>
              <Text>{workout.SupinatedHighGripPulldown}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "SupinatedHighGripPulldown",
                    workout.SupinatedHighGripPulldown
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.TrianglePull && (
            <CardTraining>
              <Text>{workout.TrianglePull}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("TrianglePull", workout.TrianglePull)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.NeutralGripHighPull && (
            <CardTraining>
              <Text>{workout.NeutralGripHighPull}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "NeutralGripHighPull",
                    workout.NeutralGripHighPull
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.InclineRow && (
            <CardTraining>
              <Text>{workout.InclineRow}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("InclineRow", workout.InclineRow)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.RowingTriangleMachine && (
            <CardTraining>
              <Text>{workout.RowingTriangleMachine}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "RowingTriangleMachine",
                    workout.RowingTriangleMachine
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.InclineLeverRow && (
            <CardTraining>
              <Text>{workout.InclineLeverRow}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "InclineLeverRow",
                    workout.InclineLeverRow
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.RowingMachine && (
            <CardTraining>
              <Text>{workout.RowingMachine}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("RowingMachine", workout.RowingMachine)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.InclineRowSupinatedGrip && (
            <CardTraining>
              <Text>{workout.InclineRowSupinatedGrip}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "InclineRowSupinatedGrip",
                    workout.InclineRowSupinatedGrip
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.RowingSupinatedGripMachine && (
            <CardTraining>
              <Text>{workout.RowingSupinatedGripMachine}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "RowingSupinatedGripMachine",
                    workout.RowingSupinatedGripMachine
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.Saw && (
            <CardTraining>
              <Text>{workout.Saw}</Text>
              <ButtonDelete
                onClick={() => handleDeleteByField("Saw", workout.Saw)}
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.Pulldown && (
            <CardTraining>
              <Text>{workout.Pulldown}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("Pulldown", workout.Pulldown)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {/* Biceps */}
          {workout.DumbbellCurl && (
            <CardTraining>
              <Text>{workout.DumbbellCurl}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("DumbbellCurl", workout.DumbbellCurl)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.WBarCurl && (
            <CardTraining>
              <Text>{workout.WBarCurl}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("WBarCurl", workout.WBarCurl)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.HammerThread && (
            <CardTraining>
              <Text>{workout.HammerThread}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("HammerThread", workout.HammerThread)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.InclineDumbbellCurl && (
            <CardTraining>
              <Text>{workout.InclineDumbbellCurl}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "InclineDumbbellCurl",
                    workout.InclineDumbbellCurl
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.PreacherBench && (
            <CardTraining>
              <Text>{workout.PreacherBench}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("PreacherBench", workout.PreacherBench)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {/* Peito */}
          {workout.BenchPress && (
            <CardTraining>
              <Text>{workout.BenchPress}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("BenchPress", workout.BenchPress)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.InclineBenchPress && (
            <CardTraining>
              <Text>{workout.InclineBenchPress}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "InclineBenchPress",
                    workout.InclineBenchPress
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.DeclineBenchPress && (
            <CardTraining>
              <Text>{workout.DeclineBenchPress}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "DeclineBenchPress",
                    workout.DeclineBenchPress
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.HighPulleyCross && (
            <CardTraining>
              <Text>{workout.HighPulleyCross}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "HighPulleyCross",
                    workout.HighPulleyCross
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.CrossMediaPulley && (
            <CardTraining>
              <Text>{workout.CrossMediaPulley}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "CrossMediaPulley",
                    workout.CrossMediaPulley
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.CrossLowPulley && (
            <CardTraining>
              <Text>{workout.CrossLowPulley}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("CrossLowPulley", workout.CrossLowPulley)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.Crucifix && (
            <CardTraining>
              <Text>{workout.Crucifix}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("Crucifix", workout.Crucifix)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.LeaningCrucifix && (
            <CardTraining>
              <Text>{workout.LeaningCrucifix}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "LeaningCrucifix",
                    workout.LeaningCrucifix
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {/* Perna */}
          {workout.ExtensionChair && (
            <CardTraining>
              <Text>{workout.ExtensionChair}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("ExtensionChair", workout.ExtensionChair)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.FlexorChair && (
            <CardTraining>
              <Text>{workout.FlexorChair}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("FlexorChair", workout.FlexorChair)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.FlexingTable && (
            <CardTraining>
              <Text>{workout.FlexingTable}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("FlexingTable", workout.FlexingTable)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.LegPress && (
            <CardTraining>
              <Text>{workout.LegPress}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("LegPress", workout.LegPress)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.AbductorChair && (
            <CardTraining>
              <Text>{workout.AbductorChair}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("AbductorChair", workout.AbductorChair)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.AdductorChair && (
            <CardTraining>
              <Text>{workout.AdductorChair}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("AdductorChair", workout.AdductorChair)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.Bugaro && (
            <CardTraining>
              <Text>{workout.Bugaro}</Text>
              <ButtonDelete
                onClick={() => handleDeleteByField("Bugaro", workout.Bugaro)}
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.Squat && (
            <CardTraining>
              <Text>{workout.Squat}</Text>
              <ButtonDelete
                onClick={() => handleDeleteByField("Squat", workout.Squat)}
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.Hack && (
            <CardTraining>
              <Text>{workout.Hack}</Text>
              <ButtonDelete
                onClick={() => handleDeleteByField("Hack", workout.Hack)}
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.Stiff && (
            <CardTraining>
              <Text>{workout.Stiff}</Text>
              <ButtonDelete
                onClick={() => handleDeleteByField("Stiff", workout.Stiff)}
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.Earth && (
            <CardTraining>
              <Text>{workout.Earth}</Text>
              <ButtonDelete
                onClick={() => handleDeleteByField("Earth", workout.Earth)}
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.Lunge && (
            <CardTraining>
              <Text>{workout.Lunge}</Text>
              <ButtonDelete
                onClick={() => handleDeleteByField("Lunge", workout.Lunge)}
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.PelvicLift && (
            <CardTraining>
              <Text>{workout.PelvicLift}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("PelvicLift", workout.PelvicLift)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {/* Ombros */}
          {workout.LateralRaise && (
            <CardTraining>
              <Text>{workout.LateralRaise}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("LateralRaise", workout.LateralRaise)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.Development && (
            <CardTraining>
              <Text>{workout.Development}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("Development", workout.Development)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.LateralElevationPulley && (
            <CardTraining>
              <Text>{workout.LateralElevationPulley}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "LateralElevationPulley",
                    workout.LateralElevationPulley
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.FrontElevation && (
            <CardTraining>
              <Text>{workout.FrontElevation}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("FrontElevation", workout.FrontElevation)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.FrontPulleyRaise && (
            <CardTraining>
              <Text>{workout.FrontPulleyRaise}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "FrontPulleyRaise",
                    workout.FrontPulleyRaise
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.InvertedCrucifix && (
            <CardTraining>
              <Text>{workout.InvertedCrucifix}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "InvertedCrucifix",
                    workout.InvertedCrucifix
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {/* Triceps */}
          {workout.TricepsBar && (
            <CardTraining>
              <Text>{workout.TricepsBar}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("TricepsBar", workout.TricepsBar)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.TricepsRope && (
            <CardTraining>
              <Text>{workout.TricepsRope}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("TricepsRope", workout.TricepsRope)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.French && (
            <CardTraining>
              <Text>{workout.French}</Text>
              <ButtonDelete
                onClick={() => handleDeleteByField("French", workout.French)}
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.TricepsForehead && (
            <CardTraining>
              <Text>{workout.TricepsForehead}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField(
                    "TricepsForehead",
                    workout.TricepsForehead
                  )
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
          {workout.TricepsBench && (
            <CardTraining>
              <Text>{workout.TricepsBench}</Text>
              <ButtonDelete
                onClick={() =>
                  handleDeleteByField("TricepsBench", workout.TricepsBench)
                }
              >
                Delatar
              </ButtonDelete>
            </CardTraining>
          )}
        </BoxCard>
      ))}
      <ButtonMore onClick={handleMore}>
        {addTrainig ? "Cancelar" : "Adiconar exercios"}
      </ButtonMore>

      {addTrainig && (
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
    </Container>
  );
}
