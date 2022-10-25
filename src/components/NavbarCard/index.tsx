import React from 'react'
import { Container, IconImage, Image, Title } from './style'

const srcImg = ''

interface navbarCardProps{
    title:string
    src:string
}

export const NavbarCard = (props:navbarCardProps) => {
    

  return (
    <Container>
        <Title>
        {props.title||"Wakl"}
      </Title>
      <IconImage >
        <Image 
        src={props.src||srcImg}
        ></Image>
      </IconImage>
    </Container>
  )
}
