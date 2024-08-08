import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const TitleHome = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 35px;
  font-weight: bold;
  padding: 100px;

  @media (max-width: 600px) {
    font-size: 30px;
    padding: 80px;
  }
`;

export const ImgIcon = styled.img`
  border-radius: 10px;
  width: 350px;
`;
