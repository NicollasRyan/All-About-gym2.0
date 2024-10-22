import { Delete } from "@mui/icons-material";
import {
  CardTraining,
  ButtonDelete,
  Text,
  BoxText,
  ButtonSee,
} from "../../styles";
import { useState } from "react";
import { VideoModal } from "../VideoModal";

export function BicepsWork({ workout, handleDelete }: any) {
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
      {workout.DumbbellCurl && (
        <CardTraining>
          <BoxText>
            <Text>{workout.DumbbellCurl}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("oZi_IESyxnA");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.DumbbellCurl) {
                handleDelete("DumbbellCurl", workout.DumbbellCurl);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.WBarCurl && (
        <CardTraining>
          <BoxText>
            <Text>{workout.WBarCurl}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("V6UEDzY51gY");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.WBarCurl) {
                handleDelete("WBarCurl", workout.WBarCurl);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.HammerThread && (
        <CardTraining>
          <BoxText>
            <Text>{workout.HammerThread}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("0qkQy8V2FC0");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.HammerThread) {
                handleDelete("HammerThread", workout.HammerThread);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.InclineDumbbellCurl && (
        <CardTraining>
          <BoxText>
            <Text>{workout.InclineDumbbellCurl}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("IoxqjVqb9Cg");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.InclineDumbbellCurl) {
                handleDelete(
                  "InclineDumbbellCurl",
                  workout.InclineDumbbellCurl
                );
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.PreacherBench && (
        <CardTraining>
          <BoxText>
            <Text>{workout.PreacherBench}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("Kh4G5N48EO8");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.PreacherBench) {
                handleDelete("PreacherBench", workout.PreacherBench);
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
