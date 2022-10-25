import React from 'react'
import {ContainerCard} from './styled'
import { Navbar } from '../Navbar'
import { NavbarCard } from '../NavbarCard'
interface props{
    children:JSX.Element
    src:string
    title:string
    background?:string
  }

export const Card = (props:props) => {
  return (
    <ContainerCard
    style={{
      color:props.background?"white":"black",
      background:props.background}}
    >
        <NavbarCard
        src={props.src}
        title={props.title}
        ></NavbarCard>
        {props.children}
    </ContainerCard>
  )
}
