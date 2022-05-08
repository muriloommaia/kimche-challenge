import styled from 'styled-components';

export const Line = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex: ${({ flex }) => flex};
  border-style: ${({ borderStyle }) => borderStyle};
  background-color: ${({ color, theme }) => theme.colors[color] || color};
`;
