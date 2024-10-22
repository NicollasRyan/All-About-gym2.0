import { useState } from "react";
import { Delete } from "@mui/icons-material";
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
          <BoxText>
            <Text>{workout.ExtensionChair}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("el3oHblB5DM");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.ExtensionChair) {
                handleDelete("ExtensionChair", workout.ExtensionChair);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.FlexorChair && (
        <CardTraining>
          <BoxText>
            <Text>{workout.FlexorChair}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("Zss6E3VU6X0");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.FlexorChair) {
                handleDelete("FlexorChair", workout.FlexorChair);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.FlexingTable && (
        <CardTraining>
          <BoxText>
            <Text>{workout.FlexingTable}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("ULaRrQa7c");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.FlexingTable) {
                handleDelete("FlexingTable", workout.FlexingTable);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.LegPress && (
        <CardTraining>
          <BoxText>
            <Text>{workout.LegPress}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("nY8UsiAqwds");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.LegPress) {
                handleDelete("LegPress", workout.LegPress);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.AbductorChair && (
        <CardTraining>
          <BoxText>
            <Text>{workout.AbductorChair}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("Wf602gn_9zU");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.AbductorChair) {
                handleDelete("AbductorChair", workout.AbductorChair);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.AdductorChair && (
        <CardTraining>
          <BoxText>
            <Text>{workout.AdductorChair}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("e2gmqTG1OgQ");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.AdductorChair) {
                handleDelete("AdductorChair", workout.AdductorChair);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Bugaro && (
        <CardTraining>
          <BoxText>
            <Text>{workout.Bugaro}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("IGf9fR4Y7Iw");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.Bugaro) {
                handleDelete("Bugaro", workout.Bugaro);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Squat && (
        <CardTraining>
          <BoxText>
            <Text>{workout.Squat}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("zgk71dUUt0Y");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.Squat) {
                handleDelete("Squat", workout.Squat);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Hack && (
        <CardTraining>
          <BoxText>
            <Text>{workout.Hack}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("Whp712OHPl8");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.Hack) {
                handleDelete("Hack", workout.Hack);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Stiff && (
        <CardTraining>
          <BoxText>
            <Text>{workout.Stiff}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("u1E3_u2gJYE");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.Stiff) {
                handleDelete("Stiff", workout.Stiff);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Earth && (
        <CardTraining>
          <BoxText>
            <Text>{workout.Earth}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("50AkPBZwACQ");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.Earth) {
                handleDelete("Earth", workout.Earth);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Lunge && (
        <CardTraining>
          <BoxText>
            <Text>{workout.Lunge}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("LD6dydg2bxc");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.Lunge) {
                handleDelete("Lunge", workout.Lunge);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.PelvicLift && (
        <CardTraining>
          <BoxText>
            <Text>{workout.PelvicLift}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("ptK0azwOXwM");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.PelvicLift) {
                handleDelete("PelvicLift", workout.PelvicLift);
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
