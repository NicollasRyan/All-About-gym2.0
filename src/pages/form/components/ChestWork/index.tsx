import { Delete } from "@mui/icons-material";
import { CardTraining, ButtonDelete, Text, ButtonSee, BoxText } from "../../styles";
import { useState } from "react";
import { VideoModal } from "../VideoModal";

export function ChestWork({ workout, handleDelete }: any) {
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
      {workout.BenchPress && (
        <CardTraining>
          <BoxText>
            <Text>{workout.BenchPress}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("EZMYCLKuGow");
              }}
            >
              Ver execução
            </ButtonSee>

          </BoxText>
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
          <BoxText>
            <Text>{workout.InclineBenchPress}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("RGeSgQmO1EU");
              }}
            >
              Ver execução
            </ButtonSee>

          </BoxText>
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
      {workout.HighPulleyCross && (
        <CardTraining>
          <BoxText>
            <Text>{workout.HighPulleyCross}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("pdMWt71MPlw");
              }}
            >
              Ver execução
            </ButtonSee>

          </BoxText>
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
          <BoxText>
            <Text>{workout.CrossMediaPulley}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("i35eFApgyLg");
              }}
            >
              Ver execução
            </ButtonSee>

          </BoxText>
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
          <BoxText>
            <Text>{workout.CrossLowPulley}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("QUcXXwxa6hE");
              }}
            >
              Ver execução
            </ButtonSee>

          </BoxText>
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
          <BoxText>
            <Text>{workout.Crucifix}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("FzCnfD0gOXo");
              }}
            >
              Ver execução
            </ButtonSee>

          </BoxText>
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
          <BoxText>
            <Text>{workout.LeaningCrucifix}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("uy9Xk3SVrms");
              }}
            >
              Ver execução
            </ButtonSee>

          </BoxText>
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
      <VideoModal open={open} onClose={handleClose} idLink={idLink} />
    </>
  );
}
