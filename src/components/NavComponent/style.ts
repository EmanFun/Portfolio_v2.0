import styled from "styled-components";
import Link from "next/link";

export const Container = styled.section`
    background-color: black;
    color: white;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
`

export const StyledLink = styled(Link)`
    display: flex;
    gap: 10px;
    &:hover{
        transform: scale(1.2);
    }
    &:active{
        gap: 1.5rem;
    }
` 