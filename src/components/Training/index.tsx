import React, { useEffect, useState } from 'react'
import { Title } from '../Navbar/styled'
import { ContainerSleep } from '../Sleep/styled'
import { ButtonToggle } from '../Walk/styled'

export const Training = () => {
    const [time,setTime] = useState(0)
    const [isStop,setIsStop] = useState(true)
    const toggleStop = ()=> setIsStop(value=>!value)

    useEffect(()=>{
        

        if(!isStop){
            setTimeout(()=>{
            setTime((value)=>value+1)
        },1000)
        }

        
        
    },[time,isStop])
  return (
    <div>
    <ContainerSleep>
        <Title>{time}</Title>
        <p>Seconds in Training</p>
    </ContainerSleep>
    <ButtonToggle

        style={{
            color:"white",
            background:!isStop?"red":"black"
        }}

        onClick={toggleStop}
        >{isStop?"start":"stop"}</ButtonToggle>
    </div>
  )
}
