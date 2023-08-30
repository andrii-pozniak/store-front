import styled from "styled-components";
import { Pagination } from "@mui/material";

export const Button = styled.button`
width: 24px;
height: 24px;
border: none;
border-radius: 3px;
background:  ${(props) => (props.disabled ? "#D6D6D6" : "#95CD41")};
 
`;
export const PaginationStyle = styled(Pagination)`

@media screen and (max-width: 767px){
  display: none;
} 
`;
