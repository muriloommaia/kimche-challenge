import styled from 'styled-components';

export const Background = styled.div`
  background-image: url(${({ theme, image }) => theme.textures[image]});
  background-color: ${({ theme, color }) => theme.colors[color]};
`;
