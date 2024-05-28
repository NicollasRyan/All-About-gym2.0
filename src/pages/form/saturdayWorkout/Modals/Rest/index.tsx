import { useForm } from "react-hook-form";
import { BoxModal, TitleModal, BoxButtons, ButtonModal } from "../styles";
import { Modal } from "@mui/material";

type FunctioType = {
  openRest: boolean;
  handleClose: () => void;
  handleTraining: (data: any) => void;
};

export function Rest({ openRest, handleClose, handleTraining }: FunctioType) {
  const { handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    data.rest = "Dia de Descanço";
    console.log(data, "<=");
    handleTraining(data);
    handleClose();
  };

  return (
    <Modal open={openRest} onClose={handleClose}>
      <BoxModal>
        <TitleModal>Você quer Descansar nesse Dia?</TitleModal>
        <BoxButtons>
          <ButtonModal onClick={handleSubmit(onSubmit)} active={true}>
            Sim
          </ButtonModal>
          <ButtonModal onClick={handleClose} active={false}>
            Cancelar
          </ButtonModal>
        </BoxButtons>
      </BoxModal>
    </Modal>
  );
}
