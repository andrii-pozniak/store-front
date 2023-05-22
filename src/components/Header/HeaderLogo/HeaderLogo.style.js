import styled from "styled-components";

export const Logo = styled.div`
display: flex;
padding: 0 58px;
`;
export const FistWord = styled.p`
font-family: ${p => p.theme.fonts.body};
font-style: normal;
margin: 0;
margin-top: 11px;
font-weight: ${p => p.theme.fontWeights.bold};
font-size:  ${p => p.theme.fontSizes.mx};
line-height: ${p => p.theme.lineHeights.heading};
display: flex;
align-items: flex-end;
color:  ${p => p.theme.colors.accent};
`;
export const Number = styled.p`
border: 0.6px solid #333333;
margin: 0;
margin-top: 11px;
margin-left: 3px;
height: 12px;
padding: 2px;
font-family: ${p => p.theme.fonts.body};
font-style: normal;
font-weight: ${p => p.theme.fontWeights.middle};
font-size:  ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.heading};
color:  ${p => p.theme.colors.dark}; 

`;
export const SecondWord = styled.p`
font-family: ${p => p.theme.fonts.body};
font-style: normal;
margin: 0;
margin-top: 11px;
font-weight: ${p => p.theme.fontWeights.bold};
font-size:  ${p => p.theme.fontSizes.mx};
line-height: ${p => p.theme.lineHeights.heading};
display: flex;
align-items: flex-end;
letter-spacing: -0.01em;
color:  ${p => p.theme.colors.dark};
`;
export const Text = styled.div`
padding: 0 58px;
margin: 0;
font-family: ${p => p.theme.fonts.body};
font-style: normal;
font-weight: ${p => p.theme.fontWeights.normal};
font-size:  ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.heading};
color:  ${p => p.theme.colors.dark}; 
`;