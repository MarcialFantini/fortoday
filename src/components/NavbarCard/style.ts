import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    padding: 10px;
`

export const Title = styled.h4`
    margin: 0;
    padding: 0;

    font-size: 1.6rem;
`

export const IconImage = styled.picture`
    width: 30px;
    height: 30px;

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

`

export const Image = styled.img`
    width: 100%;
    height: auto;


`