import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const CardContainer = styled(Box)`
  background: #777777;
  border-radius: 8px;
  padding: 25px;

  width: 450px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  cursor: pointer;

  &:hover {
    color: #f7f7f7;
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
      rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
      rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  }
`;

export const TitleCard = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
`;

export const Training = styled(Typography)``;
