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

export function LegWork({ workout, handleDelete }: any) {
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
      {workout.ExtensionChair && (
        <CardTraining>
          <Text>{workout.ExtensionChair}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("el3oHblB5DM");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.ExtensionChair) {
                  handleDelete("ExtensionChair", workout.ExtensionChair);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.FlexorChair && (
        <CardTraining>
          <Text>{workout.FlexorChair}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("Zss6E3VU6X0");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.FlexorChair) {
                  handleDelete("FlexorChair", workout.FlexorChair);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.FlexingTable && (
        <CardTraining>
          <Text>{workout.FlexingTable}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("ULaRrQa7c");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.FlexingTable) {
                  handleDelete("FlexingTable", workout.FlexingTable);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.LegPress && (
        <CardTraining>
          <Text>{workout.LegPress}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("nY8UsiAqwds");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.LegPress) {
                  handleDelete("LegPress", workout.LegPress);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.AbductorChair && (
        <CardTraining>
          <Text>{workout.AbductorChair}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("Wf602gn_9zU");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.AbductorChair) {
                  handleDelete("AbductorChair", workout.AbductorChair);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.AdductorChair && (
        <CardTraining>
          <Text>{workout.AdductorChair}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("e2gmqTG1OgQ");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.AdductorChair) {
                  handleDelete("AdductorChair", workout.AdductorChair);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.Bugaro && (
        <CardTraining>
          <Text>{workout.Bugaro}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("IGf9fR4Y7Iw");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.Bugaro) {
                  handleDelete("Bugaro", workout.Bugaro);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.Squat && (
        <CardTraining>
          <Text>{workout.Squat}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("zgk71dUUt0Y");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.Squat) {
                  handleDelete("Squat", workout.Squat);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.Hack && (
        <CardTraining>
          <Text>{workout.Hack}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("Whp712OHPl8");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.Hack) {
                  handleDelete("Hack", workout.Hack);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.Stiff && (
        <CardTraining>
          <Text>{workout.Stiff}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("u1E3_u2gJYE");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.Stiff) {
                  handleDelete("Stiff", workout.Stiff);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.Earth && (
        <CardTraining>
          <Text>{workout.Earth}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("50AkPBZwACQ");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.Earth) {
                  handleDelete("Earth", workout.Earth);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.Lunge && (
        <CardTraining>
          <Text>{workout.Lunge}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("LD6dydg2bxc");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.Lunge) {
                  handleDelete("Lunge", workout.Lunge);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.PelvicLift && (
        <CardTraining>
          <Text>{workout.PelvicLift}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("ptK0azwOXwM");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.PelvicLift) {
                  handleDelete("PelvicLift", workout.PelvicLift);
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
