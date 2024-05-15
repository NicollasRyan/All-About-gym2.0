import { Modal, Box, Typography } from "@mui/material";
import { BoxModal, ButtonTraning } from "./styles";

interface TypeModal {
  open: boolean;
  handleClose: () => void;
  //   handleSubmit: any;
}

export function ModalForm({ open, handleClose }: TypeModal) {
  return (
    <Modal open={open} onClose={handleClose}>
      <BoxModal>
        <Typography>Montar treino</Typography>
        <Typography sx={{ mt: 2 }}>
          <ButtonTraning>Ombro</ButtonTraning>
          <ButtonTraning>Peito</ButtonTraning>
          <ButtonTraning>Costas</ButtonTraning>
          <ButtonTraning>Biceps</ButtonTraning>
          <ButtonTraning>Triceps</ButtonTraning>
          <ButtonTraning>Perna</ButtonTraning>
        </Typography>
      </BoxModal>
    </Modal>
  );
}
