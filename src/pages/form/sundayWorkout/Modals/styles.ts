import styled from "@emotion/styled";
import { Box, Typography, Grid, Checkbox, Button } from "@mui/material";

type TypeButton = {
  active: boolean;
};

export const BoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 870px;
  border-radius: 10px;
  background-color: #1c1c1c;
  padding: 35px;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;

  @media (max-width: 600px) {
  width: 370px;
  }
`;

export const TitleModal = styled(Typography)`
  font-size: 18px;
  font-weight: 700;

  border-bottom: 1px solid gray;
  padding-bottom: 15px;
`;

export const BoxSelect = styled(Grid)`
  padding: 25px 0 25px;
`;

export const GridItem = styled(Grid)`
  display: flex;
  align-items: center;
`;

export const LabelTraning = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
`;

export const CheckTraning = styled(Checkbox)`
  color: #e9e9e9;
`;

export const BoxButtons = styled(Box)`
  padding-top: 15px;
  border-top: 1px solid gray;
`;

export const ButtonModal = styled(Button)<TypeButton>`
  padding: 8px;
  margin-right: 15px;
  color: #fff;
  background: ${(props) => (props.active ? "#31bb00" : "#da0008")};

  :hover {
    background: ${(props) => (props.active ? "#1e7400" : "#890005")};
  }
`;
