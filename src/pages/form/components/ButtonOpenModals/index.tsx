import { Grid } from "@mui/material";
import { ButtonAdd } from "../../styles";

export function ButtonOpenModals({ handleOpenRest, handleOpenShoulder, handleOpenChest, handleOpenBack, handleOpenBiceps, handleOpenTriceps, handleOpenLeg, training, trainingId }: any) {
    return (
        <Grid container spacing={2} sx={{ marginBottom: "25px" }}>
            <Grid item sm={12} md={6}>
                <ButtonAdd onClick={handleOpenRest}>Descansar</ButtonAdd>
            </Grid>
            <Grid item sm={12} md={6}>
                <ButtonAdd onClick={handleOpenShoulder}>ombro</ButtonAdd>
            </Grid>
            <Grid item sm={12} md={6}>
                <ButtonAdd onClick={handleOpenChest}>Peito</ButtonAdd>
            </Grid>
            <Grid item sm={12} md={6}>
                <ButtonAdd onClick={handleOpenBack}>Costas</ButtonAdd>
            </Grid>
            <Grid item sm={12} md={6}>
                <ButtonAdd onClick={handleOpenBiceps}>biceps</ButtonAdd>
            </Grid>
            <Grid item sm={12} md={6}>
                <ButtonAdd onClick={handleOpenTriceps}>triceps</ButtonAdd>
            </Grid>

            <Grid item sm={12} md={6}>
                <ButtonAdd onClick={handleOpenLeg}>Pernas</ButtonAdd>
            </Grid>
        </Grid>
    )
}