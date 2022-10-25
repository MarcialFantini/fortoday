import React from 'react'
import { NavbarContainer, Title,IconImage, Image } from './styled'
const srcImg = "https://th.bing.com/th/id/R.5f4b935205fd0d385bae2ff9ceb8e88f?rik=D6MYoZqxkihdeQ&pid=ImgRaw&r=0"

interface propsNavbar{
  title?:string
  imgSrc?:string

}

export const Navbar = (props:propsNavbar) => {
  return (
    <NavbarContainer>
      <Title>
        {props.title||"ForToday"}
      </Title>
      <IconImage >
        <Image 
        src={props.imgSrc||srcImg}
        ></Image>
      </IconImage>
    </NavbarContainer>
  )
}
