import React, { useEffect, useState } from 'react'
import { Bar, Btn, ContainerBtn, ContainerWater, Title } from './styled'

export const Water = () => {
    const [select,setSelect] = useState(0)
    const [list,setList]=useState([false,false,false,false,false,false,false,false,false,false])
    const [add,setAdd] = useState(false)
    const [active,setActive]=useState(false)

    const ChangeAdd = () => setAdd(true) 
    const ToggleActive = ()=> setActive((value)=>!value)

    const HandlerAdd = ()=>{
        if(select !== 10){
            ChangeAdd()
            ToggleActive()
        }
    }

    const ChangeValueList = (key:number)=>{
        const newList = [...list]
        newList[key] = !newList[key]
        
        setList(newList)
    }

    useEffect(()=>{
        if(!add && select !== 0){
            ChangeValueList(select-1)
            setSelect(select-1)
            
        }
        if(add ){
         
            ChangeValueList(select)
            setSelect(select+1)
            setAdd(false)
        }

    },[active])

    return (
    <>
    <ContainerWater>
        <Bar 
        style={{height:list[0]?"100%":"10%"}}
        />
        <Bar 
        style={{height:list[1]?"100%":"10%"}}
        />
        <Bar 
        style={{height:list[2]?"100%":"10%"}}
        />
        <Bar 
        style={{height:list[3]?"100%":"10%"}}
        />
        <Bar 
        style={{height:list[4]?"100%":"10%"}}
        />
        <Bar 
        style={{height:list[5]?"100%":"10%"}}
        />
        <Bar 
        style={{height:list[6]?"100%":"10%"}}
        />
        <Bar 
        style={{height:list[7]?"100%":"10%"}}
        />
        <Bar 
        style={{height:list[8]?"100%":"10%"}}
        />
        <Bar 
        style={{height:list[9]?"100%":"10%"}}
        />
        
    </ContainerWater>
    <Title>
        cups: {select>=10?"10":select}
        </Title>
    <ContainerBtn>
        

        <Btn
        onClick={HandlerAdd}
        style={{background:select!==10?"green":"lightblue"}}
        >Add</Btn>
        <Btn
        onClick={ToggleActive}

        style={{background:select!==0?"red":"lightblue"}}
        >Dell</Btn>
    </ContainerBtn>
    </>
  )
}
