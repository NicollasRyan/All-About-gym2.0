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
  openBack: boolean;
  handleClose: () => void;
  handleTraining: (data: any) => void;
};

export function Back({ openBack, handleClose, handleTraining }: FunctioType) {
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
    <Modal open={openBack} onClose={onClose}>
      <BoxModal>
        <TitleModal>Treino de Costas</TitleModal>
        <BoxSelect container spacing={2}>
          <GridItem item xs={6}>
            <Controller
              name="HighPull"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Puxada Alta" : "")
                    }
                    checked={value === "Puxada Alta"}
                  />
                  <LabelTraning>Puxada Alta</LabelTraning>
                </>
              )}
            />
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="SupinatedHighGripPulldown"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(
                        e.target.checked ? "Puxada Alta Pegada Supinada" : ""
                      )
                    }
                    checked={value === "Puxada Alta Pegada Supinada"}
                  />
                </>
              )}
            />
            <LabelTraning>Puxada Alta Pegada Supinada</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="TrianglePull"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Puxada com Triangulo" : "")
                    }
                    checked={value === "Puxada com Triangulo"}
                  />
                </>
              )}
            />
            <LabelTraning>Puxada com Triangulo</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="NeutralGripHighPull"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(
                        e.target.checked ? "Puxada Alta Pegada Neutra" : ""
                      )
                    }
                    checked={value === "Puxada Alta Pegada Neutra"}
                  />
                </>
              )}
            />
            <LabelTraning>Puxada Alta Pegada Neutra</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="InclineRow"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Remada Inclinada" : "")
                    }
                    checked={value === "Remada Inclinada"}
                  />
                </>
              )}
            />
            <LabelTraning>Remada Inclinada</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="RowingTriangleMachine"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(
                        e.target.checked
                          ? "Remada com Triangulo na Maquina"
                          : ""
                      )
                    }
                    checked={value === "Remada com Triangulo na Maquina"}
                  />
                </>
              )}
            />
            <LabelTraning>Remada com Triangulo na Maquina</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="InclineLeverRow"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Remada Cavalinho" : "")
                    }
                    checked={value === "Remada Cavalinho"}
                  />
                </>
              )}
            />
            <LabelTraning>Remada Cavalinho</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="RowingMachine"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Remada na Maquina" : "")
                    }
                    checked={value === "Remada na Maquina"}
                  />
                </>
              )}
            />
            <LabelTraning>Remada na Maquina</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="InclineRowSupinatedGrip"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(
                        e.target.checked
                          ? "Remada Inclinada Pegada Supinada"
                          : ""
                      )
                    }
                    checked={value === "Remada Inclinada Pegada Supinada"}
                  />
                </>
              )}
            />
            <LabelTraning>Remada Inclinada Pegada Supinada</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="RowingSupinatedGripMachine"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(
                        e.target.checked
                          ? "Remada na Maquina Pegada Supinada"
                          : ""
                      )
                    }
                    checked={value === "Remada na Maquina Pegada Supinada"}
                  />
                </>
              )}
            />
            <LabelTraning>Remada na Maquina Pegada Supinada</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="Saw"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Serrote" : "")
                    }
                    checked={value === "Serrote"}
                  />
                </>
              )}
            />
            <LabelTraning>Serrote</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="Pulldown"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Pulldown" : "")
                    }
                    checked={value === "Pulldown"}
                  />
                </>
              )}
            />
            <LabelTraning>Pulldown</LabelTraning>
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
