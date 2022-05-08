import styled from 'styled-components';

export const BoxCountryStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-bottom-width: 3px;
  border-right-width: 3px;
  border-radius: 0.25rem;
  min-width: 270px;
`;
