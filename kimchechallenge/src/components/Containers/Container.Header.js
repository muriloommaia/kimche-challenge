import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  background-image: url(${({ theme }) => theme.textures.primary});
  background-color: ${({ theme }) => theme.colors.primary};
`;
