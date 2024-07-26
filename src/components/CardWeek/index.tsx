import { CardContent } from "@mui/material";
import { CardContainer, TitleCard, Training } from "./styles";
import { useNavigate } from "react-router-dom";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { TypeTraining, workoutSunday } from "../../Hooks";

interface CardType {
  day: string;
  link: any;
}

export function CardWeek({ day, link }: CardType) {
  const [workout, setWorkout] = useState<TypeTraining[]>([]);
  const navigate = useNavigate();

  const handleWorkout = () => {
    navigate(`/${link}`);
  };

  const weekTraining = (day: string) => {
    if (day === "Domingo") {
      return workoutSunday(workout);
    } else if (day === "Segunda-feira") {
      return workoutSunday(workout);
    } else if (day === "Terça-feira") {
      return workoutSunday(workout);
    } else if (day === "Quarta-feira") {
      return workoutSunday(workout);
    } else if (day === "Quinta-feira") {
      return workoutSunday(workout);
    } else if (day === "Sexta-feira") {
      return workoutSunday(workout);
    } else if (day === "Sábado") {
      return workoutSunday(workout);
    }
  };

  const [trainingId, setTrainingId] = useState("")

  useEffect(() => {
    const fetchTrainingDocuments = async (collectionName: string) => {
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
          setWorkout([trainingData]);
        } else {
          console.log("Nenhum documento encontrado.");
        }
      } catch (error) {
        console.error("Erro ao obter documento:", error);
      }
    };

    if (day === "Domingo") {
      fetchTrainingDocuments("sunday_training");
      setTrainingId("sunday_training");
    } else if (day === "Segunda-feira") {
      fetchTrainingDocuments("monday_training");
      setTrainingId("monday_training");
    } else if (day === "Terça-feira") {
      fetchTrainingDocuments("tuesday_training");
      setTrainingId("tuesday_training");
    } else if (day === "Quarta-feira") {
      fetchTrainingDocuments("wednesday_training");
      setTrainingId("wednesday_training");
    } else if (day === "Quinta-feira") {
      fetchTrainingDocuments("thursday_training");
      setTrainingId("thursday_training");
    } else if (day === "Sexta-feira") {
      fetchTrainingDocuments("friday_training");
      setTrainingId("friday_training");
    } else if (day === "Sábado") {
      fetchTrainingDocuments("saturday_training");
      setTrainingId("saturday_training");
    }
  }, [day, trainingId]);

  // useEffect(() => {
  //   const fetchAllDocuments = async (collectionName: string) => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, collectionName));
  //       const trainingData = querySnapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //       }));
  //       console.log("<=", trainingData);
  //       setWorkout(trainingData);
  //     } catch (error) {
  //       console.error("Erro ao obter documento:", error);
  //     }
  //   };

  //   if (day === "Domingo") {
  //     fetchAllDocuments("sunday_training");
  //   } else if (day === "Segunda-feira") {
  //     fetchAllDocuments("monday_training");
  //   } else if (day === "Terça-feira") {
  //     fetchAllDocuments("tuesday_training");
  //   } else if (day === "Quarta-feira") {
  //     fetchAllDocuments("wednesday_training");
  //   } else if (day === "Quinta-feira") {
  //     fetchAllDocuments("thursday_training");
  //   } else if (day === "Sexta-feira") {
  //     fetchAllDocuments("friday_training");
  //   } else if (day === "Sábado") {
  //     fetchAllDocuments("saturday_training");
  //   }
  // }, [day]);

  return (
    <CardContainer onClick={handleWorkout}>
      <CardContent>
        <TitleCard>{day}</TitleCard>
        <Training>{weekTraining(day)}</Training>
      </CardContent>
    </CardContainer>
  );
}
