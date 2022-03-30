import React, { FC } from 'react'
import { ButtonWrapper} from "./ButtonElements"
interface Prop {
    size : string
}
const Button: FC<Prop> = (props) => {
  return (
    <ButtonWrapper size={props.size}>
      {props.children}
    </ButtonWrapper>
  )
}

export default Button