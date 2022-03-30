import styled from 'styled-components';
interface Prop {
    size : string
}
export const ButtonWrapper = styled.button<Prop>`
     width: ${(props) => (props.size === "small" ? "130px;" : "100%")};
     height: 40px;
     background : rgb(53, 124, 218);
     border-radius : 2px;
     cursor : pointer;
     color : white;
     outline : none;
     font-size : 12px;
     line-height : 22px;
     border : none;

`