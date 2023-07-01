import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerSocial = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 55px;
`;
export const Circle = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 15px;
  border-radius: 50%;
  background: ${(p) => p.theme.colors.grayBackground};
`;
export const ItemHeader = styled.p`
  margin: 0;
  margin-top: 62px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;
