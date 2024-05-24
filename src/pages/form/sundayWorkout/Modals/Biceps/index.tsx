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
  openBiceps: boolean;
  handleClose: () => void;
  handleTraining: (data: any) => void;
};

export function Biceps({
  openBiceps,
  handleClose,
  handleTraining,
}: FunctioType) {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    data.Biceps = "Biceps";
    console.log(data, "<=");
    handleTraining(data);
  };

  return (
    <Modal open={openBiceps} onClose={handleClose}>
      <BoxModal>
        <TitleModal>Montar treino</TitleModal>
        <BoxSelect container spacing={2}>
          <GridItem item xs={6}>
            <Controller
              name="DumbbellCurl"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Rosca com Halteres" : "")
                    }
                    checked={value === "Rosca com Halteres"}
                  />
                  <LabelTraning>Rosca com Halteres</LabelTraning>
                </>
              )}
            />
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="WBarCurl"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Rosca com Barra W" : "")
                    }
                    checked={value === "Rosca com Barra W"}
                  />
                </>
              )}
            />
            <LabelTraning>Rosca com Barra W</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="HammerThread"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Rosca Martelo" : "")
                    }
                    checked={value === "Rosca Martelo"}
                  />
                </>
              )}
            />
            <LabelTraning>Rosca Martelo</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="InclineDumbbellCurl"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(
                        e.target.checked ? "Rosca com Halteres Inclinado" : ""
                      )
                    }
                    checked={value === "Rosca com Halteres Inclinado"}
                  />
                </>
              )}
            />
            <LabelTraning>Rosca com Halteres Inclinado</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="PreacherBench"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Banco Scott" : "")
                    }
                    checked={value === "Banco Scott"}
                  />
                </>
              )}
            />
            <LabelTraning>Banco Scott</LabelTraning>
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
