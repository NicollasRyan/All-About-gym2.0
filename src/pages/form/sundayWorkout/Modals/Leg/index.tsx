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
  openLeg: boolean;
  handleClose: () => void;
  handleTraining: (data: any) => void;
};

export function Leg({ openLeg, handleClose, handleTraining }: FunctioType) {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data, "<=");
    handleTraining(data);
    handleClose();
  };

  return (
    <Modal open={openLeg} onClose={handleClose}>
      <BoxModal>
        <TitleModal>Montar treino</TitleModal>
        <BoxSelect container spacing={2}>
          <GridItem item xs={6}>
            <Controller
              name="ExtensionChair"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Cadeira Extension" : "")
                    }
                    checked={value === "Cadeira Extension"}
                  />
                  <LabelTraning>Cadeira Extension</LabelTraning>
                </>
              )}
            />
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="FlexorChair"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Cadeira Flexora" : "")
                    }
                    checked={value === "Cadeira Flexora"}
                  />
                </>
              )}
            />
            <LabelTraning>Cadeira Flexora</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="FlexingTable"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Mesa Flexora" : "")
                    }
                    checked={value === "Mesa Flexora"}
                  />
                </>
              )}
            />
            <LabelTraning>Mesa Flexora</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="LegPress"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Leg Press" : "")
                    }
                    checked={value === "Leg Press"}
                  />
                </>
              )}
            />
            <LabelTraning>Leg Press</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="AbductorChair"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Cadeira Abdutora" : "")
                    }
                    checked={value === "Cadeira Abdutora"}
                  />
                </>
              )}
            />
            <LabelTraning>Cadeira Abdutora</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="AdductorChair"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Cadeira Adutora" : "")
                    }
                    checked={value === "Cadeira Adutora"}
                  />
                </>
              )}
            />
            <LabelTraning>Cadeira Adutora</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="Bugaro"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) => onChange(e.target.checked ? "Bugaro" : "")}
                    checked={value === "Bugaro"}
                  />
                </>
              )}
            />
            <LabelTraning>Bugaro</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="Squat"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Agachamento" : "")
                    }
                    checked={value === "Agachamento"}
                  />
                </>
              )}
            />
            <LabelTraning>Agachamento</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="Hack"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Agachamento Hack" : "")
                    }
                    checked={value === "Agachamento Hack"}
                  />
                </>
              )}
            />
            <LabelTraning>Agachamento</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="Stiff"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) => onChange(e.target.checked ? "Stiff" : "")}
                    checked={value === "Stiff"}
                  />
                </>
              )}
            />
            <LabelTraning>Stiff</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="Earth"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) => onChange(e.target.checked ? "Terra" : "")}
                    checked={value === "Terra"}
                  />
                </>
              )}
            />
            <LabelTraning>Terra</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="Lunge"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) => onChange(e.target.checked ? "Afundo" : "")}
                    checked={value === "Afundo"}
                  />
                </>
              )}
            />
            <LabelTraning>Afundo</LabelTraning>
          </GridItem>
          <GridItem item xs={6}>
            <Controller
              name="PelvicLift"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <CheckTraning
                    color="secondary"
                    onChange={(e) =>
                      onChange(e.target.checked ? "Elevação Pelvica" : "")
                    }
                    checked={value === "Elevação Pelvica"}
                  />
                </>
              )}
            />
            <LabelTraning>Elevação Pelvica</LabelTraning>
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
