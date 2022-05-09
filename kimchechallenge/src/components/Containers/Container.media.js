import styled from 'styled-components';

export const MediaScreen = styled.div`
  @media (min-width: 768px) {
    width: ${({ smWidth }) => (smWidth || '100%')};
    margin: ${({ smMargin }) => (smMargin || '0px')};
  }
  @media (min-width: 768px) {
    width: ${({ mdWidth }) => (mdWidth || '100%')};
    margin: ${({ mdMargin }) => (mdMargin || '0px')};
  }
  @media (min-width: 124px) {
    width: ${({ lgWidth }) => (lgWidth || '100%')};
    margin: ${({ lgMargin }) => (lgMargin || '0px')};
  }
  @media (min-width: 1280px) {
    width: ${({ xlWidth }) => (xlWidth || '100%')};
    margin: ${({ xlMargin }) => (xlMargin || '0px')};
  }
`;
