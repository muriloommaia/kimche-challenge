import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${({ color }) => (color || '#000')};
  padding: ${({ padding }) => (padding || '0px')};
`;
