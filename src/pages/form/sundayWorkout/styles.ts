import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const TitleWorkout = styled(Typography)`
  font-size: 30px;
  font-weight: 700;
`;

export const BoxAddTraning = styled(Box)``;

export const TextWoukout = styled(Typography)``;

export const BoxCard = styled(Box)``;

export const CardTraining = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 25px;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;

  /* background: #9b00b1; */

  padding: 25px 0;

  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */
`;

export const Text = styled(Typography)``;

export const ButtonDelete = styled(Button)``;

export const ButtonAdd = styled(Button)`
  padding: 30px;
  width: 200px;
  background: #cc007b;
  color: #fff;
  font-weight: 700;

  :hover {
    background: #f40093;
  }
`;

export const ButtonMore = styled(Button)`
  padding: 15px;
  background: #ff003a;
  color: #fff;
  font-weight: 700;

  :hover {
    background: #ff2859;
  }
`;
