import styled from 'styled-components'

export const Wrapper = styled.div`
    display : flex;
    justify-content : flex-end;
`
export const Nav = styled.ul`
    display : flex;
    justify-content : space-between;
    list-style-type : none;
    width : 40%;
    max-width : 500px;
    padding : 30px;
    li{
        font-weight: 700 ;
        font-size : 1.2rem;
        display : flex;
        justify-content : center;
        flex-direction : column;        
    }
`
export const Divider = styled.div`
    border-top : 1.5px solid rgba(229, 231, 235, 1);
    width : 95%;
    margin : 0 auto;
`
