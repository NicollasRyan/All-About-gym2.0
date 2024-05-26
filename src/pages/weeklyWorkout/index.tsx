import { Container, Grid } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";

import { ContainerWorkout, TitleWeek } from "./styles";
import { CardWeek } from "../../components/CardWeek";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { TypeTraining, workoutSunday } from "../../Hooks";

export function WeeklyWorkout() {
  const [trainingSunday, setTrainingSunday] = useState<TypeTraining[]>([]);

  useEffect(() => {
    const fetchAllDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sunday_training"));
        const trainingData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        console.log("<=", trainingData);
        setTrainingSunday(trainingData);
      } catch (error) {
        console.error("Erro ao obter documento:", error);
      }
    };

    fetchAllDocuments();
  }, []);

  const sunday = workoutSunday(trainingSunday);

  return (
    <Container>
      <TitleWeek>
        {trainingSunday && trainingSunday.length >= 0
          ? "Monte seu treino semanal"
          : "Treino da semana"}
      </TitleWeek>
      <ContainerWorkout container spacing={2}>
        <Grid item xs={6}>
          <CardWeek day={"Domingo"} link={"sunday-workout"} training={sunday} />
        </Grid>
        <Grid item xs={6}>
          <CardWeek
            day={"Segunda-feira"}
            link={"monday-workout"}
            training={""}
          />
        </Grid>
        <Grid item xs={6}>
          <CardWeek
            day={"Terça-feira"}
            link={"tuesday-workout"}
            training={""}
          />
        </Grid>
        <Grid item xs={6}>
          <CardWeek
            day={"Quarta-feira"}
            link={"wednesday-workout"}
            training={""}
          />
        </Grid>
        <Grid item xs={6}>
          <CardWeek
            day={"Quinta-feira"}
            link={"thursday-workout"}
            training={""}
          />
        </Grid>
        <Grid item xs={6}>
          <CardWeek day={"Sexta-feira"} link={"friday-workout"} training={""} />
        </Grid>
        <Grid item xs={6}>
          <CardWeek day={"Sabado"} link={"saturday-workout"} training={""} />
        </Grid>
      </ContainerWorkout>
    </Container>
  );
}
