import { Box, Button, Container, Typography, styled } from "@mui/material";

export const BoxHeader = styled(Box)`
  padding: 50px 0 50px;
  background: #4f4f4f;
  color: #fff;
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled(Typography)`
  font-size: 24px;
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
`;

export const ButtonNavigation = styled(Button)`
  color: #fff;
  border: 0.5px solid gray;
  border-radius: 5px;
  min-width: 25px;
  padding: 5px;

  margin-right: 10px;
`;
