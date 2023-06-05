import styled from "styled-components"

export const HitPage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: -15px;
  width: 50px;
  height: 50px;
  background: ${(p) => p.theme.colors.backgroundAlert};
  border: none;
  border-radius: ${(p) => p.theme.radii.round};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;

export const DiscountPage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  margin-top: -15px;
  width: 50px;
  height: 50px;
  background: ${(p) => p.theme.colors.backgroundHit};
  border: none;
  border-radius: ${(p) => p.theme.radii.round};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;
export const NewPage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: -15px;
  width: 50px;
  height: 50px;
  background: ${(p) => p.theme.colors.backgroundGreen};
  border: none;
  border-radius: ${(p) => p.theme.radii.round};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;
export const BestPricePage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: -15px;
  width: 50px;
  height: 50px;
  background: ${(p) => p.theme.colors.backgroundSecondary};
  border: none;
  border-radius: ${(p) => p.theme.radii.round};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
`;

export const DeliveryPage = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: -15px;
  width: 50px;
  height: 50px;
  background: ${(p) => p.theme.colors.backgroundBlue};
  border: none;
  border-radius: ${(p) => p.theme.radii.round};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
  
`;
