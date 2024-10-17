import { Delete } from "@mui/icons-material";
import { CardRest, Text, ButtonDelete } from "../../styles";

export function RestWork({ workout, handleDelete }: any) {
  return (
    <>
      {workout.rest && (
        <CardRest>
          <Text>{workout.rest}</Text>
          <ButtonDelete
            onClick={() => {
              if (workout.rest) {
                handleDelete("rest", workout.rest);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardRest>
      )}
    </>
  );
}
