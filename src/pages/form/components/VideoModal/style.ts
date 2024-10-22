import styled from '@emotion/styled';
import {Box, Button, Typography} from '@mui/material';

export const BoxModalVideo = styled(Box)`
  padding: 900px;
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

export const BoxVideo = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
`;

export const ButtonClose = styled(Button)`
  border: 1px solid #fa5e55;
  color: #fa5e55;

  :hover {
    background: #ff1b14;
    color: #dbdbdb;
  }
`;

export const BoxContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Video = styled.iframe`
  width: 700px;
  height: 400px;
  border-radius: 25px;
`;
