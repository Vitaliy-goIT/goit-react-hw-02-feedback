import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.sm};
  border: none;
  font-family: ${p => p.theme.fonts.body};
  letter-spacing: 1.5px;

  :hover {
    background-color: ${p => p.theme.colors.secondary};
  }
  :active {
    background-color: ${p => p.theme.colors.accent};
  }
`;
