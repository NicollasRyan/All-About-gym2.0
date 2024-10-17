import { Delete } from "@mui/icons-material";
import { CardTraining, ButtonDelete, Text } from "../../styles";

export function BicepsWork({ workout, handleDelete }: any) {
  return (
    <>
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
            <Delete />
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
            <Delete />
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
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.InclineDumbbellCurl && (
        <CardTraining>
          <Text>{workout.InclineDumbbellCurl}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.InclineDumbbellCurl) {
                handleDelete(
                  "InclineDumbbellCurl",
                  workout.InclineDumbbellCurl
                );
              }
            }}
          >
            <Delete />
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
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}
    </>
  );
}
