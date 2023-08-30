import styled from "styled-components";
import { ReactComponent as StarSvg } from "../Header/assest/star.svg";
import { ReactComponent as FeedbackSvg } from "../Header/assest/feedback.svg";

export const CardBody = styled.div`
  padding: 16px;
  background: ${(p) => p.theme.colors.white};
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 3px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
`;

export const CardInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: minmax(1fr, auto) repeat(2, auto);
  gap: 15px 0;
`;

export const StarBody = styled.div`
  display: flex;
  gap: 3px;
`;

export const SvgStar = styled(StarSvg)``;

export const SvgFeedback = styled(FeedbackSvg)`
  margin-left: 11px;
  margin-right: 3px;
`;

export const Image = styled.img`
  max-width: 276px;
  height: 198px;
`;

export const CodPage = styled.p`
  margin: 0;
  margin-left: auto;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  color: ${(p) => p.theme.colors.dark};
`;

export const NamePage = styled.p`
  width: 267px;
  height: 36px;
  margin-bottom: 24px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
`;

export const CountPage = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
`;

export const CategoryPage = styled.div`
  position: absolute;
  margin-top: 15px; 
`;

export const CodCategory = styled.div`
  display: flex;
  align-items: baseLine;
  justify-content: space-between;
  text-align: center;
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
`;

export const BtnBuy = styled.button`
  padding: 11px 14px;
  margin: 0;
  border: none;
  border-radius: 3px;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
  background: ${(p) => p.theme.colors.accentText};
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  @media screen and (max-width: 425px){
    padding: 8px 10px;
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;

export const StatusPage = styled.p`
  margin: 0;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => (p.status === "Відсутній" ? "#EA5C2B" : "#95CD41")};
`;

export const BtnHeard = styled.button`
  border: none;
  margin-right: auto;
  background: transparent;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
`;
