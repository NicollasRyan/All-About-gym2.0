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
  openShoulder: boolean;
  handleClose: () => void;
  handleTraining: (data: any) => void;
};

export function Shoulder({
  openShoulder,
  handleClose,
  handleTraining,
}: FunctioType) {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data, "<=");
    handleTraining(data);
    handleClose();
  };

  return (
    <Modal open={openShoulder} onClose={handleClose}>
      <BoxModal>
        <TitleModal>Montar treino</TitleModal>
        <BoxSelect container spacing={2}>
          <GridItem item xs={6}>
            <Controller
              name="LateralRaise"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Elevação Lateral" : "")
                    }
                    checked={value === "Elevação Lateral"}
                  />
                  <LabelTraning>Elevação Lateral</LabelTraning>
                </>
              )}
            />
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="Development"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Desenvolvimento" : "")
                    }
                    checked={value === "Desenvolvimento"}
                  />
                </>
              )}
            />
            <LabelTraning>Desenvolvimento</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="FrontElevation"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Elevação Frontal" : "")
                    }
                    checked={value === "Elevação Frontal"}
                  />
                </>
              )}
            />
            <LabelTraning>Elevação Frontal</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="LateralElevationPulley"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(
                        e.target.checked ? "Elevação Lateral na Polia" : ""
                      )
                    }
                    checked={value === "Elevação Lateral na Polia"}
                  />
                </>
              )}
            />
            <LabelTraning>Elevação Lateral na Polia</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="FrontPulleyRaise"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(
                        e.target.checked ? "Elevação Frontal na Polia" : ""
                      )
                    }
                    checked={value === "Elevação Frontal na Polia"}
                  />
                </>
              )}
            />
            <LabelTraning>Elevação Frontal na Polia</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="InvertedCrucifix"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Cruxifixo Invertido" : "")
                    }
                    checked={value === "Cruxifixo Invertido"}
                  />
                </>
              )}
            />
            <LabelTraning>Cruxifixo Invertido</LabelTraning>
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
