import { CardContent } from "@mui/material";
import { CardContainer, TitleCard, Training } from "./styles";
import { useNavigate } from "react-router-dom";

interface CardType {
  day: string;
  link: string;
  training: string;
}

export function CardWeek({ day, link, training }: CardType) {
  const title: any[] = [];
  const navigate = useNavigate();

  const handleWorkout = () => {
    navigate(`/${link}`);
  };

  return (
    <CardContainer onClick={handleWorkout}>
      <CardContent>
        <TitleCard>{day}</TitleCard>
        <Training>{training}</Training>
      </CardContent>
    </CardContainer>
  );
}
