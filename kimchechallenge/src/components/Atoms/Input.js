import styled from 'styled-components';

export const Input = styled.input`
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  width: 180px;
  text-align: ${({ align }) => align};
  border: 1px solid rgb(0 0 0 / var(--tw-text-opacity));
  border-radius: 0.375rem;
  margin: ${({ margin }) => margin};
`;
