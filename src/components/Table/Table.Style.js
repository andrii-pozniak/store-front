import styled from "styled-components";

export const ContainerTable = styled.div`
max-width: 1170px;
padding: 20px;
padding-bottom: 50px;
margin-left: auto;
margin-right: auto;
`;
export const TableStyle = styled.tr`
/* padding: 20px; */
border-collapse: collapse;
border: 1px solid #dee2e6;

`;
export const TrStyle = styled.tr`
border: 1px solid #dee2e6;
`;
export const TdStyle = styled.td`
padding: 10px;
border: 1px solid #dee2e6;
text-align: center;
vertical-align: middle;
font-style: normal;
font-weight: ${p => p.theme.fontWeights.normal};
font-size:  ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.body};

`;
export const ThStyle = styled.th`
padding: 7px 15px;
border: 1px solid #dee2e6;
text-align: center;
background: #f7f7f7;
font-style: normal;
font-weight: ${p => p.theme.fontWeights.interMiddle};
font-size:  ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.body};
text-transform: uppercase;
color:  ${p => p.theme.colors.dark};
`;
export const Button = styled.button`
border: none;
padding: 10px;
background: ${p => p.theme.colors.accent};
font-style: normal;
font-weight: ${p => p.theme.fontWeights.interMiddle};
font-size:  ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.body};
text-transform: uppercase;
color:  ${p => p.theme.colors.dark};
`;