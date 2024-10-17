import { Delete } from "@mui/icons-material";
import { CardTraining, ButtonDelete, Text } from "../../styles";

export function TricepsWork({ workout, handleDelete }: any) {
  return (
    <>
      {workout.TricepsBar && (
        <CardTraining>
          <Text>{workout.TricepsBar}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.TricepsBar) {
                handleDelete("TricepsBar", workout.TricepsBar);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.TricepsRope && (
        <CardTraining>
          <Text>{workout.TricepsRope}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.TricepsRope) {
                handleDelete("TricepsRope", workout.TricepsRope);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.French && (
        <CardTraining>
          <Text>{workout.French}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.French) {
                handleDelete("French", workout.French);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.TricepsForehead && (
        <CardTraining>
          <Text>{workout.TricepsForehead}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.TricepsForehead) {
                handleDelete("TricepsForehead", workout.TricepsForehead);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.TricepsBench && (
        <CardTraining>
          <Text>{workout.TricepsBench}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.TricepsBench) {
                handleDelete("TricepsBench", workout.TricepsBench);
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
