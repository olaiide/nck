import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;
export const Wrapper = styled.div`
  margin: 0 auto;
`;
export const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export const LeftContent = styled.div`
width : 40%;
`;
export const RightContent = styled.div`
width : 40%;
.form__grid{
        display : grid;
    grid-template-columns : repeat(2, 1fr);
    grid-gap : 15px;
    }
    .radio {
        display : flex;
        padding : 3px;
    }
    .radio_check{
        position: relative;
        top : 10px;
        left : -10px;
    
    }
    label {
            display : block;
            text-align: start;
            font-size: 16px;
            font-style: normal;
            line-height: 26px;
            letter-spacing: 0em;
            padding-bottom : 5px;
            padding-top : 12px;
    }
    .input{
            border: 1px solid #e0dcdc;
            height : 35px;
            width : 96%;
            background-color : #f7f5f5;
            border-radius : 3px;
            outline : none;
            padding-left :7px;
            &::placeholder {
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0em;
            color : black;
    }
}
`;
export const Cards = styled.div`
    display: flex ;
    justify-content: flex-end;
    padding : 5px;
    .radio_check {
      position : relative;
      left : 5px;
      top : 15px;
    }
    .image{
      padding : 10px;
    }
`
export const Total = styled.div`
  width : 100%;
  margin-top : 1rem;
  padding-bottom: 1rem;
  .total{
      display : flex;
      font-weight : 500;
      font-size : 13px;
      justify-content:space-between ;
      padding : 5px;
  }
`;
export const CompletePayment = styled.div`
    display: flex;
    justify-content: space-between;
    width : 100%;
    margin-top : 2rem;
    div {
        font-weight : 800;
        font-size : 17px;
    }
`
