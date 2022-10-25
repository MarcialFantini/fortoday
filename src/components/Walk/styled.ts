import styled from "styled-components";


export const WalkContainer = styled.div`
    width: 100%;
    


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
`
interface propsPercent{
    percent:number
}

export const WalkCircle = styled.div<propsPercent>`
    transition: all 1s ;

    width: 120px;
    height: 120px;

    background: conic-gradient(rgb(125,42,232) ${props=>props.percent}deg,#CC99FF  0deg);
    
    

    border-radius: 50%;

    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContainerPoint = styled.div`
    width: 100%;
    height: 100%;

    top: -2.5px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    position: relative;
`

export const Point = styled.div`
    width: 10px;
    height: 10px;
    background: white;
    border: 1px solid black;
    border-radius: 50%;
`

export const OutCircle = styled.div`
    width: 110px;
    height: 110px;
   
    background: white;
    border-radius: 50%;
    position: absolute;
`

export const ButtonToggle = styled.button`
    width: 80%;
    height: 10%;

    

    border: none;
    border-radius: 5px;
    padding: 5px 10px;

    transition: all 0.5s;
    
    cursor: pointer;
`