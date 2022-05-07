import styled from 'styled-components';

export const LoadingDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
  animation: pulse 2s cubic-bezier(0.47, 0, 0.745, 0.715) infinite;
`;
