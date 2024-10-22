import styled from '@emotion/styled';
import {Box, Button, Typography} from '@mui/material';

export const CardTraining = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #a8a8a8;

  background: #313234;

  padding: 50px;
`;

export const CardRest = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 227px;
  border-radius: 8px;

  background: #313234;

  padding: 50px;

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const ButtonDelete = styled(Button)`
  padding: 15px;
  border: 1px solid #fa5e55;

  color: #fa5e55;

  :hover {
    background: #ff1b14;
    color: #dbdbdb;
  }

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Text = styled(Typography)`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 600px) {
    padding: 18px;
  }
`;

export const BoxText = styled(Box)`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonSee = styled(Button)`
  margin-left: 45px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;