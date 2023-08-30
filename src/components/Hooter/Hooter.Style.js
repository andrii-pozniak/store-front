import styled from "styled-components";
import { Grid, Divider} from "@mui/material";

export const StyleGrid = styled(Grid)`
  && {
    padding: 72px 25px 20px !important;
    flex-basis: 23%;
    @media screen and (max-width: 991px){     
      flex-basis: 40%;
      justify-content: space-between;
    }
    @media screen and (max-width: 767px){
      padding: 42px 15px 10px !important;
     
    }
  }
`;
export const StyleGridNone = styled(Grid)`

  && {
    padding: 72px 25px 20px !important;
    flex-basis: 23%;
    @media screen and (max-width: 991px){
      display: none !important;
    }
  }
`;
export const StyleDivider = styled(Divider)`
  
   
    @media screen and (max-width: 991px){
     display: none;
    }
 
`;
export const StyleContainer = styled.div`
  background: ${(p) => p.theme.colors.dark};
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
`;

export const StyleTypography = styled.p`
  margin: 0;
  margin-top: 14px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;
export const Headline = styled.p`
  margin: 0;
  margin-bottom: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interBold};
  font-size: ${(p) => p.theme.fontSizes.ms};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;
export const ItemHooter = styled.a`
  margin-top: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  @media screen and (max-width: 767px){
    margin-top: 10px;   
    }
`;
export const ItemPage = styled.p`
  margin: 0;
  margin-top: 8px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;
export const HeaderPage = styled.p`
  margin: 0;
  margin-top: 24px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.accent};
  @media screen and (max-width: 767px){
    font-size: ${(p) => p.theme.fontSizes.m};
    }
    @media screen and (max-width: 425px){
    font-size: ${(p) => p.theme.fontSizes.s};
    }
`;
export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 53px;
  @media screen and (max-width: 767px){
    margin-top: 15px;   
    }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerSocial = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 55px;
   @media screen and (max-width: 767px){
    margin-bottom: 35px;   
    }
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
  @media screen and (max-width: 767px){
    margin-top: 32px;
  }
`;

