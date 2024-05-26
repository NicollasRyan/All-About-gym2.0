import { CardContent } from "@mui/material";
import { CardContainer, TitleCard, Training } from "./styles";
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { TypeTraining, workoutSunday } from "../../Hooks";

interface CardType {
  day: string;
  link: string;
  training: string;
}

export function CardWeek({ day, link, training }: CardType) {
  const [workout, setWorkout] = useState<TypeTraining[]>([]);
  const navigate = useNavigate();

  const handleWorkout = () => {
    navigate(`/${link}`);
  };

  const weekTraining = (day: string) => {
    if (day === "Domingo") {
      return workoutSunday(workout);
    }
  };

  useEffect(() => {
    const fetchAllDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sunday_training"));
        const trainingData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        console.log("<=", trainingData);
        setWorkout(trainingData);
      } catch (error) {
        console.error("Erro ao obter documento:", error);
      }
    };

    fetchAllDocuments();
  }, []);

  return (
    <CardContainer onClick={handleWorkout}>
      <CardContent>
        <TitleCard>{day}</TitleCard>
        <Training>{weekTraining(day) || training}</Training>
      </CardContent>
    </CardContainer>
  );
}
