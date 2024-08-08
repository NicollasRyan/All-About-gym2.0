import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const TitleWorkout = styled(Typography)`
  padding: 25px 0;
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

  margin-bottom: 20px;
  border-radius: 8px;

  background: #313234;

  padding: 50px;
`;

export const CardRest = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 100px;
  border-radius: 8px;

  background: #313234;

  padding: 50px;
`;

export const Text = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonDelete = styled(Button)`
  padding: 15px;
  background: #da0008;

  color: #fff;

  :hover {
    background: #890005;
  }
`;

export const ButtonAdd = styled(Button)`
  padding: 30px;
  width: 200px;
  background: #777777;
  color: #fff;
  font-weight: 700;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  transition: 1.5s;
  :hover {
    background: #f40093;
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px,
      rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px,
      rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  }
`;

export const ButtonMore = styled(Button)`
  padding: 15px;
  background: #f40093;

  margin-bottom: 165px;

  color: #fff;
  font-weight: 700;

  :hover {
    background: #c10074;
  }
`;