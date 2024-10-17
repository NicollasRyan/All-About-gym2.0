import { Delete } from "@mui/icons-material";
import { CardTraining, ButtonDelete, Text } from "../../styles";

export function BackWork({ workout, handleDelete }: any) {
  return (
    <>
      {workout.HighPull && (
        <CardTraining>
          <Text>{workout.HighPull}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.HighPull) {
                handleDelete("HighPull", workout.HighPull);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.SupinatedHighGripPulldown && (
        <CardTraining>
          <Text>{workout.SupinatedHighGripPulldown}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.SupinatedHighGripPulldown) {
                handleDelete(
                  "SupinatedHighGripPulldown",
                  workout.SupinatedHighGripPulldown
                );
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.TrianglePull && (
        <CardTraining>
          <Text>{workout.TrianglePull}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.TrianglePull) {
                handleDelete("TrianglePull", workout.TrianglePull);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.NeutralGripHighPull && (
        <CardTraining>
          <Text>{workout.NeutralGripHighPull}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.NeutralGripHighPull) {
                handleDelete(
                  "NeutralGripHighPull",
                  workout.NeutralGripHighPull
                );
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.InclineRow && (
        <CardTraining>
          <Text>{workout.InclineRow}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.InclineRow) {
                handleDelete("InclineRow", workout.InclineRow);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.RowingTriangleMachine && (
        <CardTraining>
          <Text>{workout.RowingTriangleMachine}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.RowingTriangleMachine) {
                handleDelete(
                  "RowingTriangleMachine",
                  workout.RowingTriangleMachine
                );
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.InclineLeverRow && (
        <CardTraining>
          <Text>{workout.InclineLeverRow}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.InclineLeverRow) {
                handleDelete("InclineLeverRow", workout.InclineLeverRow);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.RowingMachine && (
        <CardTraining>
          <Text>{workout.RowingMachine}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.RowingMachine) {
                handleDelete("RowingMachine", workout.RowingMachine);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.InclineRowSupinatedGrip && (
        <CardTraining>
          <Text>{workout.InclineRowSupinatedGrip}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.InclineRowSupinatedGrip) {
                handleDelete(
                  "InclineRowSupinatedGrip",
                  workout.InclineRowSupinatedGrip
                );
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.RowingSupinatedGripMachine && (
        <CardTraining>
          <Text>{workout.RowingSupinatedGripMachine}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.RowingSupinatedGripMachine) {
                handleDelete(
                  "RowingSupinatedGripMachine",
                  workout.RowingSupinatedGripMachine
                );
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Saw && (
        <CardTraining>
          <Text>{workout.Saw}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.Saw) {
                handleDelete("Saw", workout.Saw);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Pulldown && (
        <CardTraining>
          <Text>{workout.Pulldown}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.Pulldown) {
                handleDelete("Pulldown", workout.Pulldown);
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
