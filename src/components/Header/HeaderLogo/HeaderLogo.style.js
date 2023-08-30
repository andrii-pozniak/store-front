import styled from "styled-components";

export const Container = styled.div``;
export const Logo = styled.div`
  display: flex;
`;
export const FistWord = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  margin: 0;
  margin-top: 11px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.mx};
  line-height: ${(p) => p.theme.lineHeights.heading};
  display: flex;
  align-items: flex-end;
  color: ${(p) => p.theme.colors.accent};
  @media (max-width: 429px) {
    font-size: ${(p) => p.theme.fontSizes.ms};
    font-weight: ${(p) => p.theme.fontWeights.interBold};
  }
`;
export const Number = styled.p`
  border: 0.6px solid ${(props) => props.color};
  margin: 0;
  margin-top: 11px;
  margin-left: 3px;
  height: 12px;
  padding: 2px;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(props) => props.color};
`;
export const SecondWord = styled.p`
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  margin: 0;
  margin-top: 11px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.mx};
  line-height: ${(p) => p.theme.lineHeights.heading};
  display: flex;
  align-items: flex-end;
  letter-spacing: -0.01em;
  color: ${(props) => props.color};
  @media (max-width: 429px) {
    font-size: ${(p) => p.theme.fontSizes.ms};
    font-weight: ${(p) => p.theme.fontWeights.interBold};
  }
`;
export const Text = styled.div`
  margin: 0;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(props) => props.color};
`;
