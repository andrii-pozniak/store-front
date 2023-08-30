import styled from 'styled-components';

export const HeaderBody = styled.div`
display: flex;
padding: 0 58px;
max-width: 1440px;
border: 1px solid ${p => p.theme.colors.dark};
@media screen and (max-width: 991px){
 justify-content: space-between;
 padding: 0 15px;
 
}
`;