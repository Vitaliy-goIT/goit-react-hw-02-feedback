import styled from '@emotion/styled';

export const SectionStyle = styled.section`
  padding: ${props => props.theme.space[5]}px;
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[4]}px;
`;
