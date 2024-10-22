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

export function BackWork({ workout, handleDelete }: any) {
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
      {workout.HighPull && (
        <CardTraining>
          <BoxText>
            <Text>{workout.HighPull}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("mPmfwbc_svw");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.HighPull) {
                handleDelete("HighPull", workout.HighPull);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.SupinatedHighGripPulldown && (
        <CardTraining>
          <BoxText>
            <Text>{workout.SupinatedHighGripPulldown}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("1k0NrtycMA4");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.SupinatedHighGripPulldown) {
                handleDelete(
                  "SupinatedHighGripPulldown",
                  workout.SupinatedHighGripPulldown
                );
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.TrianglePull && (
        <CardTraining>
          <BoxText>
            <Text>{workout.TrianglePull}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("uAnrJBnxrZ0");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.TrianglePull) {
                handleDelete("TrianglePull", workout.TrianglePull);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.NeutralGripHighPull && (
        <CardTraining>
          <BoxText>
            <Text>{workout.NeutralGripHighPull}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("outtdvM-9U8");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.NeutralGripHighPull) {
                handleDelete(
                  "NeutralGripHighPull",
                  workout.NeutralGripHighPull
                );
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.InclineRow && (
        <CardTraining>
          <BoxText>
            <Text>{workout.InclineRow}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("VJHBEy2duVc");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.InclineRow) {
                handleDelete("InclineRow", workout.InclineRow);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.RowingTriangleMachine && (
        <CardTraining>
          <BoxText>
            <Text>{workout.RowingTriangleMachine}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("f8AVh4VBbos");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.RowingTriangleMachine) {
                handleDelete(
                  "RowingTriangleMachine",
                  workout.RowingTriangleMachine
                );
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.InclineLeverRow && (
        <CardTraining>
          <BoxText>
            <Text>{workout.InclineLeverRow}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("peMVFQE1BfY");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.InclineLeverRow) {
                handleDelete("InclineLeverRow", workout.InclineLeverRow);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.RowingMachine && (
        <CardTraining>
          <BoxText>
            <Text>{workout.RowingMachine}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("QyvIEdEHzHc");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.RowingMachine) {
                handleDelete("RowingMachine", workout.RowingMachine);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.InclineRowSupinatedGrip && (
        <CardTraining>
          <BoxText>
            <Text>{workout.InclineRowSupinatedGrip}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("0BfB6WHRks8");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.InclineRowSupinatedGrip) {
                handleDelete(
                  "InclineRowSupinatedGrip",
                  workout.InclineRowSupinatedGrip
                );
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.RowingSupinatedGripMachine && (
        <CardTraining>
          <BoxText>
            <Text>{workout.RowingSupinatedGripMachine}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("xly8A8fUhXo");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.RowingSupinatedGripMachine) {
                handleDelete(
                  "RowingSupinatedGripMachine",
                  workout.RowingSupinatedGripMachine
                );
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Saw && (
        <CardTraining>
          <BoxText>
            <Text>{workout.Saw}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("EUisRaNkCd4");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.Saw) {
                handleDelete("Saw", workout.Saw);
              }
            }}
          >
            <Delete />
          </ButtonDelete>
        </CardTraining>
      )}

      {workout.Pulldown && (
        <CardTraining>
          <BoxText>
            <Text>{workout.Pulldown}</Text>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("v6-QIOY0nW0");
              }}
            >
              Ver execução
            </ButtonSee>
          </BoxText>
          <ButtonDelete
            onClick={() => {
              if (workout.Pulldown) {
                handleDelete("Pulldown", workout.Pulldown);
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
