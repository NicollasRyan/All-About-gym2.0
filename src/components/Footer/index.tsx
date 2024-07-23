import { Container, Grid } from "@mui/material";

import { BoxFooter, BoxText, TextFooter, TitleFooter, TitleLogo } from "./styles";
import FormFooter from "./components/FormFooter";
import { Email, Phone } from "@mui/icons-material";

export function Footer() {

  return (
    <BoxFooter>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <TitleFooter>Sobre</TitleFooter>
            <TextFooter>App sobre curiosidades sobre academia e montagens de treino</TextFooter>
            <TitleLogo>
              All Gym
            </TitleLogo>
          </Grid>
          <Grid item md={4}>
            <FormFooter />
          </Grid>
          <Grid item md={4}>
            <TitleFooter>Contato</TitleFooter>
            <BoxText>
              <Email sx={{ width: "18px", marginRight: "8px" }} />
              <TextFooter>
                duartenr7@gmail.com
              </TextFooter>
            </BoxText>
            <BoxText>
              <Phone sx={{ width: "18px", marginRight: "8px" }} />
              <TextFooter>
                74 99978-2910
              </TextFooter>
            </BoxText>
          </Grid>
        </Grid>
      </Container>
    </BoxFooter >
  );
}
