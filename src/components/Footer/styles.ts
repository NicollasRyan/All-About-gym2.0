import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const BoxFooter = styled(Box)`
  position: relative;
  margin-top: 30px;
  padding: 120px 0 120px;
  background: #4f4f4f;
  color: #fff;
  bottom: 0;
  margin-top: auto;

  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  @media (max-width: 600px) {
    padding: 50px 0 50px; 
  }
`;

export const TitleLogo = styled(Typography)`  
  margin-top: 25px;
  font-size: 24px;
  font-weight: 700;

  cursor: pointer;
`;

export const TitleFooter = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const TextFooter = styled(Typography)`
font-size: 16px;
`

export const BoxText = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;