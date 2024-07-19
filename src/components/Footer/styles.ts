import styled from "@emotion/styled";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export const BoxFooter = styled(Box)`
  margin-top: 30px;
  padding: 50px 0 50px;
  background: #4f4f4f;
  color: #fff;
`;


export const TitleFooter = styled(Typography)`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 600;
`;

export const FormFooter = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputFooter = styled(TextField)`
  background: #FFF;

  margin: 25px 0 15px;
  border: none;
  width: 400px;
`;

export const Error = styled(Typography)`
color: red;

`;

export const ButtonSubmmit = styled(Button)`
  width: 200px;
`;