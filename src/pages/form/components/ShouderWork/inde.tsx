import { Delete } from "@mui/icons-material";
import { CardTraining, ButtonDelete, Text, BoxText, ButtonSee } from "../../styles";
import { useState } from "react";
import { VideoModal } from "../VideoModal";

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
          <BoxText>
            <Text>{workout.LateralRaise}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("IwWvZ0rlNXs");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
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
          <BoxText>
            <Text>{workout.Development}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("eufDL9MmF8A");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
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
          <BoxText>
            <Text>{workout.LateralElevationPulley}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("sKPJdvVvHuI");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
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
          <BoxText>
            <Text>{workout.FrontElevation}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("NxSuojHZa8k");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
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
          <BoxText>
            <Text>{workout.FrontPulleyRaise}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("S7B5LwWrLA0");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
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
          <BoxText>
            <Text>{workout.InvertedCrucifix}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("5HDkxzxe400");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
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
      <VideoModal open={open} onClose={handleClose} idLink={idLink} />
    </>
  );
}
