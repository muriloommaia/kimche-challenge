import styled from 'styled-components';

export const Button = styled.button`
  padding: .2rem .5rem;
  height: auto;
  display: ${({ display }) => display};
  display: ${({ hidden }) => hidden};
  color: ${({ selected, theme }) => (selected ? theme.colors.secondary : theme.colors.tertiary)};
  margin-left: .5rem;
  color: ${({ color, theme }) => theme.colors[color] || color};
  border-radius: ${({ borderRadius }) => (borderRadius || '.3rem')};
  border: ${({ border }) => (border || '2px solid')};
  border-color: black;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  background-color: ${({ selected, theme }) => (selected ? theme.colors.primary : theme.colors.secondary)};
  transition: 1s;
  :hover {
    background-color: ${({ hoverColor, theme }) => (theme.colors[hoverColor] || hoverColor)};
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.8;
  }
`;
