import { Delete } from "@mui/icons-material";
import { CardTraining, ButtonDelete, Text } from "../../styles";

export function ShoulderWork({ workout, handleDelete }: any) {
  return (
    <>
      {workout.LateralRaise && (
        <CardTraining>
          <Text>{workout.LateralRaise}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.LateralRaise) {
                handleDelete("LateralRaise", workout.LateralRaise);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Development && (
        <CardTraining>
          <Text>{workout.Development}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.Development) {
                handleDelete("Development", workout.Development);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.LateralElevationPulley && (
        <CardTraining>
          <Text>{workout.LateralElevationPulley}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.LateralElevationPulley) {
                handleDelete(
                  "LateralElevationPulley",
                  workout.LateralElevationPulley
                );
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.FrontElevation && (
        <CardTraining>
          <Text>{workout.FrontElevation}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.FrontElevation) {
                handleDelete("FrontElevation", workout.FrontElevation);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.FrontPulleyRaise && (
        <CardTraining>
          <Text>{workout.FrontPulleyRaise}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.FrontPulleyRaise) {
                handleDelete("FrontPulleyRaise", workout.FrontPulleyRaise);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.InvertedCrucifix && (
        <CardTraining>
          <Text>{workout.InvertedCrucifix}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.InvertedCrucifix) {
                handleDelete("InvertedCrucifix", workout.InvertedCrucifix);
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
