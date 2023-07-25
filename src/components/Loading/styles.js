import styled, { keyframes } from 'styled-components';

export const Body = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const InterLoad = styled.div`
  width: 100px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const rectAnimation = keyframes`
  0% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
  40% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(0.4);
  }
`;

export const Rect = styled.div`
  background: #f1f1f1;
  display: inline-block;
  height: 60px;
  width: 7px;
  margin: 0 1px;
  animation: ${rectAnimation} 1.3s infinite ease-in-out;
`;

export const Loading1 = styled(Rect)``;
export const Loading2 = styled(Rect)`
  animation-delay: -1.2s;
`;
export const Loading3 = styled(Rect)`
  animation-delay: -1.1s;
`;
export const Loading4 = styled(Rect)`
  animation-delay: -1s;
`;
export const Loading5 = styled(Rect)`
  animation-delay: -0.9s;
`;