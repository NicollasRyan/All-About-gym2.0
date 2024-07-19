import { Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { TitleFooter, InputFooter, ButtonSubmmit, Error, BoxFooter, FormFooter } from "./styles";

export function Footer() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <BoxFooter>
      <Container>
        <TitleFooter>
          Você tem mais alguma sugestão para nós colocarmos no "Sabia mais"?
          <Typography>
            Mande para nós!
          </Typography>
        </TitleFooter>
        <FormFooter onSubmit={handleSubmit(onSubmit)}>
          <InputFooter
            variant="outlined"
            {...register('suggestion', { required: 'Digite algo para enviar sua sugestão.' })}
          />
          {errors.suggestion && (
            <Error>{errors.suggestion.message as string}</Error>
          )}
          <ButtonSubmmit variant="contained">Enviar</ButtonSubmmit>
        </FormFooter>
      </Container>
    </BoxFooter>
  );
}
