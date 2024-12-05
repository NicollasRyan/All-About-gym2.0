import { useState } from "react";
import { Delete, Visibility } from "@mui/icons-material";
import { VideoModal } from "../../VideoModal";
import {
  CardTraining,
  ButtonDelete,
  Text,
  BoxText,
  ButtonSee,
} from "../styles";

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
          <Text>{workout.DumbbellCurl}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("oZi_IESyxnA");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.DumbbellCurl) {
                  handleDelete("DumbbellCurl", workout.DumbbellCurl);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.WBarCurl && (
        <CardTraining>
          <Text>{workout.WBarCurl}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("V6UEDzY51gY");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.WBarCurl) {
                  handleDelete("WBarCurl", workout.WBarCurl);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.HammerThread && (
        <CardTraining>
          <Text>{workout.HammerThread}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("0qkQy8V2FC0");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.HammerThread) {
                  handleDelete("HammerThread", workout.HammerThread);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.InclineDumbbellCurl && (
        <CardTraining>
          <Text>{workout.InclineDumbbellCurl}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("IoxqjVqb9Cg");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.InclineDumbbellCurl) {
                  handleDelete("InclineDumbbellCurl", workout.InclineDumbbellCurl);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.PreacherBench && (
        <CardTraining>
          <Text>{workout.PreacherBench}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("Kh4G5N48EO8");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.PreacherBench) {
                  handleDelete("PreacherBench", workout.PreacherBench);
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
