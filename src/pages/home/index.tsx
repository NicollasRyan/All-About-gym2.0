import { Container, Grid } from "@mui/material";
import { ImgIcon, TitleHome } from "./styles";
import iconGym from "../../images/iconGym.jpg";
import { CardWeek } from "../../components/CardWeek";

export function Home() {
  const current = new Date();
  const dayOfWeek = current.getDay();

  const WeekDay = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const nameWeekDay = WeekDay[dayOfWeek];

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TitleHome>BEM VINDO! 💪👋</TitleHome>
        </Grid>
        <Grid item xs={6}>
          <ImgIcon src={iconGym} />
        </Grid>
        <Grid item xs={6}>
          <CardWeek day={nameWeekDay} link={"sunday-workout"} />
        </Grid>
      </Grid>
    </Container>
  );
}
