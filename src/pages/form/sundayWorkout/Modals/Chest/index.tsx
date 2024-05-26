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
  openChest: boolean;
  handleClose: () => void;
  handleTraining: (data: any) => void;
};

export function Chest({ openChest, handleClose, handleTraining }: FunctioType) {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data, "<=");
    handleTraining(data);
    handleClose();
  };

  return (
    <Modal open={openChest} onClose={handleClose}>
      <BoxModal>
        <TitleModal>Montar treino</TitleModal>
        <BoxSelect container spacing={2}>
          <GridItem item xs={6}>
            <Controller
              name="BenchPress"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Supino Reto" : "")
                    }
                    checked={value === "Supino Reto"}
                  />
                  <LabelTraning>Supino Reto ou na maquina</LabelTraning>
                </>
              )}
            />
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="InclineBenchPress"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Supino Inclinado" : "")
                    }
                    checked={value === "Supino Inclinado"}
                  />
                </>
              )}
            />
            <LabelTraning>Supino inclinado</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="DeclineBenchPress"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Supino Declinado" : "")
                    }
                    checked={value === "Supino Declinado"}
                  />
                </>
              )}
            />
            <LabelTraning>Supino Declinado</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="HighPulleyCross"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Cross Polia Alta" : "")
                    }
                    checked={value === "Cross Polia Alta"}
                  />
                </>
              )}
            />
            <LabelTraning>Cross Polia Alta</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="CrossMediaPulley"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Cross Polia Media" : "")
                    }
                    checked={value === "Cross Polia Media"}
                  />
                </>
              )}
            />
            <LabelTraning>Cross Polia Media</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="CrossLowPulley"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Cross Polia Baixar" : "")
                    }
                    checked={value === "Cross Polia Baixar"}
                  />
                </>
              )}
            />
            <LabelTraning>Cross Polia Baixar</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="Crucifix"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Crucifixo na Maquina" : "")
                    }
                    checked={value === "Crucifixo na Maquina"}
                  />
                </>
              )}
            />
            <LabelTraning>Crucifixo na Maquina</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="LeaningCrucifix"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(
                        e.target.checked
                          ? "Crucifixo inclinado com Halters"
                          : ""
                      )
                    }
                    checked={value === "Crucifixo inclinado com Halters"}
                  />
                </>
              )}
            />
            <LabelTraning>Crucifixo inclinado com Halters</LabelTraning>
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
