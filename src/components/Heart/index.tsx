import React from 'react'
import { Cant, Text } from '../Calories/styled'
import { Bar, ContainerWater } from '../Water/styled'

export const Heart = () => {
    const list= [false,true,false,true,false,true,false,true,false,true,false]

  return (
    <div>
        <ContainerWater>
        <Bar 
        style={{
            background:"red",
            height:list[0]?"100%":"50%"}}
        />
        <Bar 
        style={{
            background:"red",
            height:list[1]?"100%":"50%"}}
        />
        <Bar 
        style={{background:"red",height:list[2]?"100%":"50%"}}
        />
        <Bar 
        style={{background:"red",height:list[3]?"100%":"50%"}}
        />
        <Bar 
        style={{background:"red",height:list[4]?"100%":"50%"}}
        />
        <Bar 
        style={{background:"red",height:list[5]?"100%":"50%"}}
        />
        <Bar 
        style={{background:"red",height:list[6]?"100%":"50%"}}
        />
        <Bar 
        style={{background:"red",height:list[7]?"100%":"50%"}}
        />
        <Bar 
        style={{background:"red",height:list[8]?"100%":"50%"}}
        />
        <Bar 
        style={{background:"red",height:list[9]?"100%":"50%"}}
        />
        <Bar 
        style={{background:"red",height:list[10]?"100%":"50%"}}
        />
        
    </ContainerWater>
        <Cant>119</Cant>
        <Text>bpm</Text>
    </div>
  )
}
