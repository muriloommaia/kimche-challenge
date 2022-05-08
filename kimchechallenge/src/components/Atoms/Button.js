import styled from 'styled-components';

export const Button = styled.button`
  padding: .2rem .5rem;
  height: auto;
  color: ${({ selected, theme }) => (selected ? theme.colors.secondary : theme.colors.tertiary)};
  margin-left: .5rem;
  border-radius: 1rem;
  border: 2px solid;
  border-color: black;
  background-color: ${({ selected, theme }) => (selected ? theme.colors.primary : theme.colors.secondary)};
`;
