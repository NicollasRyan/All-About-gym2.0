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

  const getGreetingMessage = (): string => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Bom Dia⛅";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Boa Tarde🌞";
    } else {
      return "Boa Noite🌘";
    }
  };

  const linkName = () => {
    if (nameWeekDay === "Domingo") {
      return "sunday-workout";
    } else if (nameWeekDay === "Segunda-feira") {
      return "monday-workout";
    } else if (nameWeekDay === "Terça-feira") {
      return "tuesday-workout";
    } else if (nameWeekDay === "Quarta-feira") {
      return "wednesday-workout";
    } else if (nameWeekDay === "Quinta-feira") {
      return "thursday-workout";
    } else if (nameWeekDay === "Sexta-feira") {
      return "friday-workout";
    } else if (nameWeekDay === "Sábado") {
      return "saturday-workout";
    }
  };

  const greetingMessage = getGreetingMessage();

  const linkMessage = linkName();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TitleHome>{greetingMessage}</TitleHome>
        </Grid>
        <Grid item xs={6}>
          <ImgIcon src={iconGym} />
        </Grid>
        <Grid item xs={6}>
          <CardWeek day={nameWeekDay} link={linkMessage} />
        </Grid>
      </Grid>
    </Container>
  );
}
