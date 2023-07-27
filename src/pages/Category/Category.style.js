import styled from "styled-components";

export const ContainerPage = styled.div`
  padding: 35px 60px 171px 60px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 29px;
`;
export const Item = styled.h2`
  text-decoration: none;
  margin: 0;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interBold};
  font-size: ${(p) => p.theme.fontSizes.mx};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(props) => props.theme.colors.dark};
  text-transform: uppercase;
`;
