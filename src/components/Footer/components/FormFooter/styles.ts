import styled from "@emotion/styled";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export const FormTitle = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const LabelForm = styled(Typography)`
  font-size: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputFooter = styled(TextField)`
  background: #FFF;

  margin: 25px 0 15px;
  border: none;
`;

export const Error = styled(Typography)`
  color: #ff2828;
`;
