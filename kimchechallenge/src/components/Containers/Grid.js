import styled from 'styled-components';

export const GridComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: 684px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
    @media (min-width: 920px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  gap: 1rem;
  padding: ${({ padding }) => padding};
`;
