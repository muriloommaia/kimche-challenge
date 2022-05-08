import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-wrap: ${({ wrap }) => wrap};
  flex-direction: ${({ direction }) => direction};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  border-left: ${({ borderLeft }) => borderLeft};
  border-right: ${({ borderRight }) => borderRight};
  border-top: ${({ borderTop }) => borderTop};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-color: ${({ borderColor, theme }) => (theme.colors[borderColor] ? theme.colors[borderColor] : borderColor)};
  border-radius: ${({ borderRadius }) => borderRadius};
  flex: ${({ flex }) => flex};
  width: ${({ width }) => width};
`;
