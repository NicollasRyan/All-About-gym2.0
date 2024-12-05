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
          <Text>{workout.HighPull}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("mPmfwbc_svw");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.HighPull) {
                  handleDelete("HighPull", workout.HighPull);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.SupinatedHighGripPulldown && (
        <CardTraining>
          <Text>{workout.SupinatedHighGripPulldown}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("1k0NrtycMA4");
              }}
            >
              <Visibility />
            </ButtonSee>
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
          </BoxText>
        </CardTraining>
      )}

      {workout.TrianglePull && (
        <CardTraining>
          <Text>{workout.TrianglePull}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("uAnrJBnxrZ0");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.TrianglePull) {
                  handleDelete("TrianglePull", workout.TrianglePull);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.NeutralGripHighPull && (
        <CardTraining>
          <Text>{workout.NeutralGripHighPull}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("outtdvM-9U8");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.NeutralGripHighPull) {
                  handleDelete("NeutralGripHighPull", workout.NeutralGripHighPull);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.InclineRow && (
        <CardTraining>
          <Text>{workout.InclineRow}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("VJHBEy2duVc");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.InclineRow) {
                  handleDelete("InclineRow", workout.InclineRow);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.RowingTriangleMachine && (
        <CardTraining>
          <Text>{workout.RowingTriangleMachine}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("f8AVh4VBbos");
              }}
            >
              <Visibility />
            </ButtonSee>
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
          </BoxText>
        </CardTraining>
      )}

      {workout.InclineLeverRow && (
        <CardTraining>
          <Text>{workout.InclineLeverRow}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("peMVFQE1BfY");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.InclineLeverRow) {
                  handleDelete("InclineLeverRow", workout.InclineLeverRow);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.RowingMachine && (
        <CardTraining>
          <Text>{workout.RowingMachine}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("QyvIEdEHzHc");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.RowingMachine) {
                  handleDelete("RowingMachine", workout.RowingMachine);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.InclineRowSupinatedGrip && (
        <CardTraining>
          <Text>{workout.InclineRowSupinatedGrip}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("0BfB6WHRks8");
              }}
            >
              <Visibility />
            </ButtonSee>
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
          </BoxText>
        </CardTraining>
      )}

      {workout.RowingSupinatedGripMachine && (
        <CardTraining>
          <Text>{workout.RowingSupinatedGripMachine}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("xly8A8fUhXo");
              }}
            >
              <Visibility />
            </ButtonSee>
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
          </BoxText>
        </CardTraining>
      )}

      {workout.Saw && (
        <CardTraining>
          <Text>{workout.Saw}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("EUisRaNkCd4");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.Saw) {
                  handleDelete("Saw", workout.Saw);
                }
              }}
            >
              <Delete />
            </ButtonDelete>
          </BoxText>
        </CardTraining>
      )}

      {workout.Pulldown && (
        <CardTraining>
          <Text>{workout.Pulldown}</Text>
          <BoxText>
            <ButtonSee
              onClick={() => {
                handleOpen();
                setIdLink("v6-QIOY0nW0");
              }}
            >
              <Visibility />
            </ButtonSee>
            <ButtonDelete
              onClick={() => {
                if (workout.Pulldown) {
                  handleDelete("Pulldown", workout.Pulldown);
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
