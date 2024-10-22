import { Controller, useForm } from "react-hook-form";
import {
  BoxModal,
  BoxSelect,
  CheckTraning,
  LabelTraning,
  TitleModal,
  GridItem,
  BoxButtons,
  ButtonModal,
} from "../styles";
import { Modal } from "@mui/material";

type FunctioType = {
  openTriceps: boolean;
  handleClose: () => void;
  handleTraining: (data: any) => void;
};

export function Triceps({
  openTriceps,
  handleClose,
  handleTraining,
}: FunctioType) {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data, "<=");
    handleTraining(data);
    onClose();
  };

  const onClose = () => {
    reset();
    handleClose();
  }

  return (
    <Modal open={openTriceps} onClose={onClose}>
      <BoxModal>
        <TitleModal>Treino de Triceps</TitleModal>
        <BoxSelect container spacing={2}>
          <GridItem item xs={6}>
            <Controller
              name="TricepsBar"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Triceps Barra" : "")
                    }
                    checked={value === "Triceps Barra"}
                  />
                  <LabelTraning>Triceps Barra</LabelTraning>
                </>
              )}
            />
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="TricepsRope"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Triceps Corda" : "")
                    }
                    checked={value === "Triceps Corda"}
                  />
                </>
              )}
            />
            <LabelTraning>Triceps Corda</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="French"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "francês" : "")
                    }
                    checked={value === "francês"}
                  />
                </>
              )}
            />
            <LabelTraning>francês</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="TricepsForehead"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Triceps Testa" : "")
                    }
                    checked={value === "Triceps Testa"}
                  />
                </>
              )}
            />
            <LabelTraning>Triceps Testa</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="TricepsBench"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Triceps no Banco" : "")
                    }
                    checked={value === "Triceps no Banco"}
                  />
                </>
              )}
            />
            <LabelTraning>Triceps no Banco</LabelTraning>
          </GridItem>
        </BoxSelect>

        <BoxButtons>
          <ButtonModal onClick={handleSubmit(onSubmit)} active={true}>
            Enviar
          </ButtonModal>
          <ButtonModal onClick={handleClose} active={false}>
            Cancelar
          </ButtonModal>
        </BoxButtons>
      </BoxModal>
    </Modal>
  );
}
