import React from 'react'
import { Nav, Wrapper, Divider} from './HeaderElements';
import Image from "../../assets/cardi.png"
const Header = () => {
  return (
    <>
    <Wrapper>
    <Nav>
      <li>TRIP</li>
      <li>RECENTLY VIEWED</li>
      <li>BOOKINGS</li>
      <li><img src={Image} alt="profile" width="50px" height="50px" style={{borderRadius: '50%'}}/></li>
    </Nav>
    </Wrapper>
     <Divider>

     </Divider>
    </>
  )
}

export default Header;