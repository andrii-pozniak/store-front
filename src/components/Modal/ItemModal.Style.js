import styled from "styled-components";

export const Container = styled.div`
padding: 50px 30px;

`;
export const LiStyle = styled.li`
list-style-type: none;
position: relative;
font-style: normal;
font-weight: ${p => p.theme.fontWeights.normal};
font-size:  ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.body};
&::before {
    content: "-";
    position: absolute;
    top: 0;
    left: -15px;  
}
`;
export const UlStyle = styled.ul`
padding-left: 20px;
margin: 0;
`;
export const SpanStyle = styled.span`
display: inline-block;
padding: 5px;
font-style: normal;
font-weight: ${p => p.theme.fontWeights.interBold};
font-size:  ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.body};
color: red;
`;
export const TextStyle = styled.p`
margin: 0;
font-style: normal;
font-weight: ${p => p.theme.fontWeights.normal};
font-size:  ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.body};
`;
export const OlLiStyle = styled.li`
font-weight: ${p => p.theme.fontWeights.normal};
font-size:  ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.body};
`;
