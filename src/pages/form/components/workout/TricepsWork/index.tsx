import { useState } from "react";
import { Delete, Visibility } from "@mui/icons-material";
import { VideoModal } from "../../VideoModal";
import { CardTraining, ButtonDelete, Text, BoxText, ButtonSee } from "../styles";

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
          <Text>{workout.TricepsBar}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("rDjhqg_cZWM");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.TricepsBar) {
                  handleDelete("TricepsBar", workout.TricepsBar);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.TricepsRope && (
        <CardTraining>
          <Text>{workout.TricepsRope}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("sTaIlf8WGjg");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.TricepsRope) {
                  handleDelete("TricepsRope", workout.TricepsRope);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>

        </CardTraining>
      )}

      {workout.French && (
        <CardTraining>
          <Text>{workout.French}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("Otc5BgXa-l8");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.French) {
                  handleDelete("French", workout.French);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.TricepsForehead && (
        <CardTraining>
          <Text>{workout.TricepsForehead}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("VakpIeaaeXA");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.TricepsForehead) {
                  handleDelete("TricepsForehead", workout.TricepsForehead);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.TricepsBench && (
        <CardTraining>
          <Text>{workout.TricepsBench}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("EPNa4oCa8KY");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.TricepsBench) {
                  handleDelete("TricepsBench", workout.TricepsBench);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}
      <VideoModal open={open} onClose={handleClose} idLink={idLink} />
    </>
  );
}
