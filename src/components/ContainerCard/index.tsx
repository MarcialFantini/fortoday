import React from 'react'
import { CardList } from './styled'

interface props{
    children:JSX.Element | JSX.Element[]
   

}

export const ContainerCard:React.FC<props> = (props) => {
  return (
    <CardList>
        
        {props.children}
    </CardList>
  )
}
