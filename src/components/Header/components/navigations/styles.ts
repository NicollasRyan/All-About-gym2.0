import { Box, Typography, styled } from "@mui/material";

export const BoxNavigation = styled(Box)`
  width: 350px;

  @media (max-width: 600px) {
    width: 150px;
  }
`;

export const ListItemText = styled(Typography)`
  color: #fff;
`;
