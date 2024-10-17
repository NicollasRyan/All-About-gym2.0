import { Delete } from "@mui/icons-material";
import { CardTraining, ButtonDelete, Text } from "../../styles";

export function LegWork({ workout, handleDelete }: any) {
  return (
    <>
      {workout.ExtensionChair && (
        <CardTraining>
          <Text>{workout.ExtensionChair}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.ExtensionChair) {
                handleDelete("ExtensionChair", workout.ExtensionChair);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.FlexorChair && (
        <CardTraining>
          <Text>{workout.FlexorChair}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.FlexorChair) {
                handleDelete("FlexorChair", workout.FlexorChair);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.FlexingTable && (
        <CardTraining>
          <Text>{workout.FlexingTable}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.FlexingTable) {
                handleDelete("FlexingTable", workout.FlexingTable);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.LegPress && (
        <CardTraining>
          <Text>{workout.LegPress}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.LegPress) {
                handleDelete("LegPress", workout.LegPress);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.AbductorChair && (
        <CardTraining>
          <Text>{workout.AbductorChair}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.AbductorChair) {
                handleDelete("AbductorChair", workout.AbductorChair);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.AdductorChair && (
        <CardTraining>
          <Text>{workout.AdductorChair}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.AdductorChair) {
                handleDelete("AdductorChair", workout.AdductorChair);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Bugaro && (
        <CardTraining>
          <Text>{workout.Bugaro}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.Bugaro) {
                handleDelete("Bugaro", workout.Bugaro);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Squat && (
        <CardTraining>
          <Text>{workout.Squat}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.Squat) {
                handleDelete("Squat", workout.Squat);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Hack && (
        <CardTraining>
          <Text>{workout.Hack}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.Hack) {
                handleDelete("Hack", workout.Hack);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Stiff && (
        <CardTraining>
          <Text>{workout.Stiff}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.Stiff) {
                handleDelete("Stiff", workout.Stiff);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Earth && (
        <CardTraining>
          <Text>{workout.Earth}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.Earth) {
                handleDelete("Earth", workout.Earth);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Lunge && (
        <CardTraining>
          <Text>{workout.Lunge}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.Lunge) {
                handleDelete("Lunge", workout.Lunge);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.PelvicLift && (
        <CardTraining>
          <Text>{workout.PelvicLift}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.PelvicLift) {
                handleDelete("PelvicLift", workout.PelvicLift);
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
