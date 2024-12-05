import { useState } from "react";
import { Delete, Visibility } from "@mui/icons-material";
import { VideoModal } from "../../VideoModal";
import { CardTraining, ButtonDelete, Text, BoxText, ButtonSee } from "../styles";

export function ShoulderWork({ workout, handleDelete }: any) {
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
      {workout.LateralRaise && (
        <CardTraining>
          <Text>{workout.LateralRaise}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("IwWvZ0rlNXs");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.LateralRaise) {
                  handleDelete("LateralRaise", workout.LateralRaise);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.Development && (
        <CardTraining>
          <Text>{workout.Development}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("eufDL9MmF8A");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.Development) {
                  handleDelete("Development", workout.Development);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.LateralElevationPulley && (
        <CardTraining>
          <Text>{workout.LateralElevationPulley}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("sKPJdvVvHuI");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.LateralElevationPulley) {
                  handleDelete("LateralElevationPulley", workout.LateralElevationPulley);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.FrontElevation && (
        <CardTraining>
          <Text>{workout.FrontElevation}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("NxSuojHZa8k");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.FrontElevation) {
                  handleDelete("FrontElevation", workout.FrontElevation);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.FrontPulleyRaise && (
        <CardTraining>
          <Text>{workout.FrontPulleyRaise}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("S7B5LwWrLA0");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.FrontPulleyRaise) {
                  handleDelete("FrontPulleyRaise", workout.FrontPulleyRaise);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.InvertedCrucifix && (
        <CardTraining>
          <Text>{workout.InvertedCrucifix}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("5HDkxzxe400");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.InvertedCrucifix) {
                  handleDelete("InvertedCrucifix", workout.InvertedCrucifix);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText >
        </CardTraining>
      )
      }
      <VideoModal open={open} onClose={handleClose} idLink={idLink} />
    </>
  );
}
