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
} from "./styles";
import { Modal } from "@mui/material";

type FunctioType = {
  openChest: boolean;
  handleClose: () => void;
};

export function Chest({ openChest, handleClose }: FunctioType) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
                      onChange(e.target.checked ? "Supino reto" : "")
                    }
                    checked={value === "Supino reto"}
                  />
                  <LabelTraning>Supino Reto ou na maquina</LabelTraning>
                </>
              )}
            />
          </GridItem>
          <GridItem item xs={6}>
            <CheckTraning color="secondary" />
            <LabelTraning>Supino inclinado</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <CheckTraning color="secondary" />
            <LabelTraning>Supino declinado</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <CheckTraning color="secondary" />
            <LabelTraning>Cross polia alta</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <CheckTraning color="secondary" />
            <LabelTraning>Cross polia media</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <CheckTraning color="secondary" />
            <LabelTraning>Cross polia baixar</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <CheckTraning color="secondary" />
            <LabelTraning>Crucifixo na maquina ou com halters</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <CheckTraning color="secondary" />
            <LabelTraning>
              Crucifixo inclinado na maquina ou com halters
            </LabelTraning>
          </GridItem>
        </BoxSelect>

        <BoxButtons>
          <ButtonModal onClick={handleSubmit(onSubmit)}>Enviar</ButtonModal>
          <ButtonModal onClick={handleClose}>Cancelar</ButtonModal>
        </BoxButtons>
      </BoxModal>
    </Modal>
  );
}
