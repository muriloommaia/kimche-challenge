import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem 0.75rem;
  border-top-width: 4px;
  border-bottom-width: 4px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-color: black;
  background-color: ${({ selected }) => (selected ? 'rgb(156 163 175)' : 'rgb(209 213 219)')};
`;
