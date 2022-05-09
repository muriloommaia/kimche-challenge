import styled from 'styled-components';

export const GridComponent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: 684px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1260px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  gap: 1rem;
  padding: ${({ padding }) => padding};
`;
