import { Box, Button, Container, MenuItem, Typography, styled } from "@mui/material";

export const BoxHeader = styled(Box)`
  padding: 50px 0 50px;
  background: #4f4f4f;
  color: #fff;
  margin-bottom: 40px;

  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  @media (max-width: 600px) {
    margin-bottom: 130px;
  }
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled(Typography)`
  font-size: 28px;
  font-weight: 700;

  cursor: pointer;
`;

export const BoxPages = styled(Box)`
  background: #fff;
`;

export const BoxNavigation = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonNavigation = styled(Button)`
  color: #fff;
  border: 0.5px solid gray;
  border-radius: 5px;
  min-width: 25px;
  padding: 5px;

  margin-right: 10px;
`;

export const TextName = styled(Typography)`
  font-size: 18px;

  padding: 25px;
`;

export const ButtonMenu = styled(MenuItem)`
  color: #ff2828;
`