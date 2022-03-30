import React from "react";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Visa from "../assets/Visa.jpg";
import Paypal from "../assets/paypal.png";
import Discover from "../assets/discover.png"
import {
  Container,
  Wrapper,
  Payment,
  LeftContent,
  RightContent,
  Cards,
  Total,
  CompletePayment
} from "./DashboardElements";
import { Divider } from "../components/Header/HeaderElements";
const Dashboard = () => {
  const TotalData = [
    { name: "Subtotal", price: " ₦2,497.00" },
    { name: "Estimated TAX", price: " ₦119.64" },
    { name: "Promotional Code", price: " ₦-60.00", code: " : Z4KXLM9A" },
  ];
  return (
    <Container>
      <Wrapper>
        <Header />
        <Payment>
          <LeftContent>
            <h2>Payment Information</h2>
            <p style={{ opacity: "0.5" }}>Choose your method of payment.</p>
            <Card />
          </LeftContent>
          <RightContent>
            <Cards>
              <img src={Visa} alt="''" width="35px" style={{padding : '10px'}}/>  
              <img src={Discover} alt="" width="30px" style={{padding : '10px'}}/>
              <img src={Paypal} alt="" width="50px" style={{padding : '10px'}}/>
            
            </Cards>
            <form className='form__container'>
              <div className='form__grid'>
                <div>
                  <label>Credit card cumber</label>
                  <input className='input' placeholder='4324 5433 9382 1030' />
                </div>
                <div>
                  <label>Expiration Date</label>
                  <input className='input' placeholder='03/24' />
                </div>
                <div>
                  <label>Security code</label>
                  <input className='input' placeholder='420' />
                </div>
                <div>
                  <label>Postal Code</label>
                  <input className='input' placeholder='10119' />
                </div>
              </div>
              <div className='radio'>
                <input type='radio' className='radio_check' checked />{" "}
                <p>Use this card for next purchase</p>
              </div>
              <div style={{ width: "100%" }}>
                <Button size={""} children={"Add card"} />
              </div>
            </form>
          </RightContent>
        </Payment>
        <Divider></Divider>
        <Payment>
          <Total>
            {TotalData.map((item, index) => (
              <div className='total' key={index}>
                <div>
                  {item.name}
                  <span style={{ opacity: "0.5" }}>{item.code}</span>
                </div>
                <div>{item.price}</div>
              </div>
            ))}
          </Total>
        </Payment>
        <Divider></Divider>
        <Payment>
         <CompletePayment>
             <Button children={'Complete payment'} size="small"/>
             <div>TOTAL :₦2556.64 </div>
         </CompletePayment>
         </Payment>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
