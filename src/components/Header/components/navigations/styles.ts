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
