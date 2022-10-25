import styled from "styled-components";

export const ContainerWater = styled.div`
    width: 100%;
    height: 80px;

    

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 5%;
  
`

export const Bar = styled.div`
    background: lightblue;
    width: 5%;
    height: 100%;
    border-radius: 5px;

    transition: all 0.3s;
`

export const ContainerBtn = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    align-items: center;
    margin: 30px 0 0 0;
`

export const Btn = styled.button`
    transition: all 0.3s;

    font-size: 1.6rem;
    border: none;
    width: 40%;

    border-radius: 10px;

    color: white;
    height: 100%;
    padding: 10px;
`

export const Title = styled.h4`
    font-size: 1.2rem;
`