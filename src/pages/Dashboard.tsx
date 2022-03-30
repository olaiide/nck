import React from "react";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import {
  Container,
  Wrapper,
  Payment,
  LeftContent,
  RightContent,
  Total,
} from "./DashboardElements";
import { Divider } from "../components/Header/HeaderElements";
const Dashboard = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Payment>
          <LeftContent>
            <h2>Payment Information</h2>
            <p>Choose your method of payment.</p>
            <div>Card</div>
          </LeftContent>
          <RightContent>
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
        <Total>
          <div>
            <h3>Subtotal</h3>
            <h3> ₦2,497.00</h3>
          </div>
          <div>
            <h3>Estimated TAX</h3>
            <h3> ₦119.64</h3>
          </div>
          <div>
            <h3>
              Promotional Code: <span>Z4KXLM9A</span>
            </h3>
            <h3> ₦-60.00</h3>
          </div>
        </Total>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
