import React, { useEffect, useState } from 'react'
import {  ButtonToggle, WalkContainer } from './styled'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Walk = () => {
    const [time,setTime] = useState(1)
    const [isStop,setIsStop]= useState(false)

    const toggleStop = ()=> setIsStop((value)=>!value)

    useEffect(()=>{
        if(time!==2000 && !isStop){
            setTimeout(()=>{
            setTime((value)=>value+1)
        },1000)
        }

        
    },[time,isStop])

  return (
    <WalkContainer>
        
        

        <CircularProgressbar value={(time*100)/300} text={String(time)+" S"} />;

        <ButtonToggle

        style={{
            color:isStop?"white":"black",
            background:!isStop?"lightblue":"black"
        }}

        onClick={toggleStop}
        >{isStop?"start":"stop"}</ButtonToggle>
    </WalkContainer>
  )
}
