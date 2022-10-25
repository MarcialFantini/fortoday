import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    padding: 5%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    margin: 0;
    font-size: 2.4rem;
`

export const IconImage = styled.picture`
    height: 50px;
    width: 50px;

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const Image = styled.img`
    width: 120%;

`