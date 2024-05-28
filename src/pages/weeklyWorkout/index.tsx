import { Container, Grid } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";

import { ContainerWorkout, TitleWeek } from "./styles";
import { CardWeek } from "../../components/CardWeek";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { TypeTraining, workoutSunday } from "../../Hooks";

export function WeeklyWorkout() {
  return (
    <Container>
      <TitleWeek>Treino Semanal</TitleWeek>
      <ContainerWorkout container spacing={2}>
        <Grid item xs={6}>
          <CardWeek day={"Domingo"} link={"sunday-workout"} />
        </Grid>
        <Grid item xs={6}>
          <CardWeek day={"Segunda-feira"} link={"monday-workout"} />
        </Grid>
        <Grid item xs={6}>
          <CardWeek day={"Terça-feira"} link={"tuesday-workout"} />
        </Grid>
        <Grid item xs={6}>
          <CardWeek day={"Quarta-feira"} link={"wednesday-workout"} />
        </Grid>
        <Grid item xs={6}>
          <CardWeek day={"Quinta-feira"} link={"thursday-workout"} />
        </Grid>
        <Grid item xs={6}>
          <CardWeek day={"Sexta-feira"} link={"friday-workout"} />
        </Grid>
        <Grid item xs={6}>
          <CardWeek day={"Sábado"} link={"saturday-workout"} />
        </Grid>
      </ContainerWorkout>
    </Container>
  );
}
