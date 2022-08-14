import styled from '@emotion/styled';

export const ListElStyle = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.text};
`;

export const Total = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.total};
`;

export const Percentage = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.percent};
`;
