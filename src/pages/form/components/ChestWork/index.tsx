import { Delete } from "@mui/icons-material";
import { CardTraining, ButtonDelete, Text } from "../../styles";

export function ChestWork({ workout, handleDelete }: any) {
  return (
    <>
      {workout.BenchPress && (
        <CardTraining>
          <Text>{workout.BenchPress}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.BenchPress) {
                handleDelete("BenchPress", workout.BenchPress);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.InclineBenchPress && (
        <CardTraining>
          <Text>{workout.InclineBenchPress}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.InclineBenchPress) {
                handleDelete("InclineBenchPress", workout.InclineBenchPress);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.DeclineBenchPress && (
        <CardTraining>
          <Text>{workout.DeclineBenchPress}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.DeclineBenchPress) {
                handleDelete("DeclineBenchPress", workout.DeclineBenchPress);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.HighPulleyCross && (
        <CardTraining>
          <Text>{workout.HighPulleyCross}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.HighPulleyCross) {
                handleDelete("HighPulleyCross", workout.HighPulleyCross);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.CrossMediaPulley && (
        <CardTraining>
          <Text>{workout.CrossMediaPulley}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.CrossMediaPulley) {
                handleDelete("CrossMediaPulley", workout.CrossMediaPulley);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.CrossLowPulley && (
        <CardTraining>
          <Text>{workout.CrossLowPulley}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.CrossLowPulley) {
                handleDelete("CrossLowPulley", workout.CrossLowPulley);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Crucifix && (
        <CardTraining>
          <Text>{workout.Crucifix}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.Crucifix) {
                handleDelete("Crucifix", workout.Crucifix);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.LeaningCrucifix && (
        <CardTraining>
          <Text>{workout.LeaningCrucifix}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.LeaningCrucifix) {
                handleDelete("LeaningCrucifix", workout.LeaningCrucifix);
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
