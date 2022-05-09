import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${({ color, theme }) => (theme.colors[color] || '#000')};
  padding: ${({ padding }) => (padding || '0px')};
  font-size: ${({ fontSize }) => (fontSize)};
  width: ${({ width }) => (width || 'auto')};
  line-height: ${({ lineHeight }) => (lineHeight)};
  text-align: ${({ text }) => (text || 'left')};
`;
