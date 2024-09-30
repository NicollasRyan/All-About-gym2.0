import { Box, Typography, styled } from "@mui/material";

export const BoxNavigation = styled(Box)`
  color: #fff;
  width: 350px;

  @media (max-width: 600px) {
    width: 250px;
  }
`;

export const ListItem = styled(Box)`
  border-bottom: 1px solid gray;
`;

export const ListItemText = styled(Typography)`
  color: #fff;
`;

export const Text = styled(Typography)`
  margin: 20px 0 0 12px;
  font-size: 12px;
  color: #a3a3a3;
`;
