import React from "react";
import styled from "styled-components";
import cardchip from "../../assets/chip.png";
import MastercardLogo from "../../assets/mastercard.svg";

const Wrapper = styled.div`
  border-radius: 6px;
  color: #fff;
  max-width: 400px;
  max-height: 250px;
  background-color: #4158d0;
  background-image: linear-gradient(
    47deg,
    #d05749 0%,
    #cf3d6a 33%,
    #9836ae 56%,
    #4049cd 100%
  );
  filter: opacity(95%);
  .card_details {
    padding: 8px 20px;
    font-size: 10px;
  }
  .card_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Card = () => {
  const cardDetail = {
    name: "John Doe",
    cardNumber: "4546 6354 5353 3434",
    expiry_date: "13/24",
  };
  return (
    <Wrapper>
      <div className='card_details'>
        <p>CARD NUMBER</p>
        <p>{cardDetail.cardNumber}</p>
        <img src={cardchip} alt='card chip' width='60px' />
        <p>Expiration Date</p>
        <p>{cardDetail.expiry_date}</p>
        <div className='card_footer'>
          <p>{cardDetail.name}</p>
          <img src={MastercardLogo} width='100px' alt='mastercard logo' />
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
