import { Delete } from "@mui/icons-material";
import { CardTraining, ButtonDelete, Text, BoxText, ButtonSee } from "../../styles";
import { VideoModal } from "../VideoModal";
import { useState } from "react";

export function TricepsWork({ workout, handleDelete }: any) {
  const [open, setOpen] = useState(false);
  const [idLink, setIdLink] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {workout.TricepsBar && (
        <CardTraining>
          <BoxText>
            <Text>{workout.TricepsBar}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("rDjhqg_cZWM");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
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
          <BoxText>
            <Text>{workout.TricepsRope}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("sTaIlf8WGjg");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
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
          <BoxText>
            <Text>{workout.French}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("Otc5BgXa-l8");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
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
          <BoxText>
            <Text>{workout.TricepsForehead}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("VakpIeaaeXA");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
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
          <BoxText>
            <Text>{workout.TricepsBench}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("EPNa4oCa8KY");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
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
      <VideoModal open={open} onClose={handleClose} idLink={idLink} />
    </>
  );
}
