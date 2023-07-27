import styled from "styled-components";

export const Button = styled.button`
width: 24px;
height: 24px;
border: none;
border-radius: 3px;
background:  ${(props) => (props.disabled ? "#D6D6D6" : "#95CD41")};
`;

