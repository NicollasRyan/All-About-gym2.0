import { Modal } from "@mui/material";
import { BoxContainer, BoxModalVideo, Video, Text, BoxVideo, ButtonClose } from "./style";

export function VideoModal({ idLink, open, onClose }: any) {
  return (
    <Modal open={open} onClose={onClose}>
      <BoxModalVideo>
        <BoxContainer>
          <Text>Veja execução:</Text>
          <ButtonClose onClick={onClose}>X</ButtonClose>
        </BoxContainer>
        <BoxVideo>
          <Video
            src={`https://www.youtube.com/embed/${idLink}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

        </BoxVideo>
      </BoxModalVideo>
    </Modal>
  );
}
