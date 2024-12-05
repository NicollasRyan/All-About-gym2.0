import { useState } from "react";
import { Delete, Visibility } from "@mui/icons-material";
import { VideoModal } from "../../VideoModal";
import { CardTraining, ButtonDelete, Text, ButtonSee, BoxText } from "../styles";

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
          <Text>{workout.BenchPress}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("EZMYCLKuGow");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.BenchPress) {
                  handleDelete("BenchPress", workout.BenchPress);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.InclineBenchPress && (
        <CardTraining>
          <Text>{workout.InclineBenchPress}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("RGeSgQmO1EU");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.InclineBenchPress) {
                  handleDelete("InclineBenchPress", workout.InclineBenchPress);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.HighPulleyCross && (
        <CardTraining>
          <Text>{workout.HighPulleyCross}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("pdMWt71MPlw");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.HighPulleyCross) {
                  handleDelete("HighPulleyCross", workout.HighPulleyCross);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.CrossMediaPulley && (
        <CardTraining>
          <Text>{workout.CrossMediaPulley}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("i35eFApgyLg");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.CrossMediaPulley) {
                  handleDelete("CrossMediaPulley", workout.CrossMediaPulley);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.CrossLowPulley && (
        <CardTraining>
          <Text>{workout.CrossLowPulley}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("QUcXXwxa6hE");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.CrossLowPulley) {
                  handleDelete("CrossLowPulley", workout.CrossLowPulley);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.Crucifix && (
        <CardTraining>
          <Text>{workout.Crucifix}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("FzCnfD0gOXo");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.Crucifix) {
                  handleDelete("Crucifix", workout.Crucifix);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.LeaningCrucifix && (
        <CardTraining>
          <Text>{workout.LeaningCrucifix}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("uy9Xk3SVrms");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.LeaningCrucifix) {
                  handleDelete("LeaningCrucifix", workout.LeaningCrucifix);
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
