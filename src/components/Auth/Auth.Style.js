import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;
export const StyleLink = styled(Link)`
  display: flex;
  align-items: end;
  font-family: "Montserrat";
  padding: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1, 25;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(p) => p.theme.colors.dark};
`;
export const ButtonStyle = styled.button`
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1, 25;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(p) => p.theme.colors.dark};
`;
