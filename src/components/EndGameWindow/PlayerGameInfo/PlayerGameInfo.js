import React from 'react';
import styled from 'styled-components'

const Title = styled.h2`
    flex-basis: 15%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    font-size: 2rem;
    transform: ${({isSended})=> isSended && 'translateX(-110%)'};
    transition: transform .4s, flex-basis 2s .4s;
    color:  ${({ theme }) => theme.colors.primary};
    @media (orientation: landscape){
        font-size: 1.2rem;
        @media(min-width: 700px){
            font-size: 2rem;
        }
    }
    span{
        display: block;
        color:  ${({ theme }) => theme.colors.orange};
    }
`


const PlayerGameInfo = ({isSended,time}) => {

    return (

        <Title
            isSended={isSended}
        >Well done! Your time is: <span>{time} seconds!</span></Title>

    );
};

export default PlayerGameInfo;