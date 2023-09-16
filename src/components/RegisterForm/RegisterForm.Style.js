import styled from "styled-components";

export const Container = styled.div`
 
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;
export const Header = styled.h2`
  text-align: center;
  margin: 30px 0 0 0;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.ms};
  line-height: ${(p) => p.theme.lineHeights.heading};
  text-transform: uppercase;
`;
export const ContainerForm = styled.div`
  width: 50%;
  margin: auto;
  margin-bottom: 30px;
`;
export const Form = styled.form``;

export const Input = styled.input`
  width: 100%;
  box-shadow: none;
  border-color: #b8b4b4;
  border-style: solid;
  border-width: 1px;
  color: #656565;
  font-size: 14px;
  line-height: 16px;
  padding: 12px 15px;
  margin-top: 18px;
  text-transform: uppercase;
`;
