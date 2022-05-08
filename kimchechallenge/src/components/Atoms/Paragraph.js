import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${({ color }) => (color || '#000')};
  padding: ${({ padding }) => (padding || '0px')};
  font-size: ${({ fontSize }) => (fontSize || '1rem')};
  width: ${({ width }) => (width || 'auto')};
  line-height: ${({ lineHeight }) => (lineHeight || '2.75rem')};
  text-align: ${({ text }) => (text || 'left')};
`;
