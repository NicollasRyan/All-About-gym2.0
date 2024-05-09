import { Container, Grid } from "@mui/material";
import React from "react";
import { ContainerWorkout, TitleWeek } from "./styles";
import { CardWeek } from "../../components/CardWeek";

export function WeeklyWorkout() {
  const title: any[] = [];

  return (
    <Container>
      <TitleWeek>
        {title && title.length >= 0
          ? "Monte seu treino semanal"
          : "Treino da semana"}
      </TitleWeek>
      <ContainerWorkout container spacing={2}>
        <Grid item xs={6}>
          <CardWeek
            day={"Domingo"}
            link={"sunday-workout"}
            training={"Costas"}
          />
        </Grid>
        <Grid item xs={6}>
          <CardWeek
            day={"Segunda-feira"}
            link={"monday-workout"}
            training={"Costas"}
          />
        </Grid>
        <Grid item xs={6}>
          <CardWeek
            day={"Terça-feira"}
            link={"tuesday-workout"}
            training={"Costas"}
          />
        </Grid>
        <Grid item xs={6}>
          <CardWeek
            day={"Quarta-feira"}
            link={"wednesday-workout"}
            training={"Costas"}
          />
        </Grid>
        <Grid item xs={6}>
          <CardWeek
            day={"Quinta-feira"}
            link={"thursday-workout"}
            training={"Costas"}
          />
        </Grid>
        <Grid item xs={6}>
          <CardWeek
            day={"Sexta-feira"}
            link={"friday-workout"}
            training={"Costas"}
          />
        </Grid>
        <Grid item xs={6}>
          <CardWeek
            day={"Sabado"}
            link={"saturday-workout"}
            training={"Costas"}
          />
        </Grid>
      </ContainerWorkout>
    </Container>
  );
}
