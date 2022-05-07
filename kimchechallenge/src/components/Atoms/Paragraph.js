import styledComponents from 'styled-components';

export const Paragraph = styledComponents.p`
  color: ${({ color }) => (color || '#000')};
`;
