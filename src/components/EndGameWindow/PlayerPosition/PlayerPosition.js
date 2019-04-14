import React from 'react';
import styled from 'styled-components'


const YourPositionWrapper = styled.div`
    width: 90%;
    flex-basis: 15%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-bottom: ${({isSended})=> isSended? '2rem':'0'};
    transition: margin-bottom .4s;
    font-size: 1.5rem;
    @media (orientation: landscape){
        font-size: 1.2rem;
        @media(min-width: 700px){
            font-size: 2rem;
        }
    }
    span,h3{
        margin: auto; 

    }
    h3{
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1em;
    }
    span{
        display: block;
        text-align: center;
        font-size: 1.2em;
        transition: transform .4s;
        color: ${({ theme }) => theme.colors.orange};
    }
`


const YourPosition = ({playerPosition,isSended}) => {

    let message = "Send your result to find out!";

    if (playerPosition === 1) {
        message = `Wooohoo! You're the best here!`
    }
    else if (playerPosition > 1 && playerPosition < 5) {
        message = `Good job!`
    } else if (playerPosition >= 5 && playerPosition <= 10) {
        message = `You have your name on the board! It's quite good, isn't it?`
    } else if (playerPosition > 10) {
        message = `Man...Stop afking, start playing.`
    }



    return (

        <YourPositionWrapper
            isSended={isSended}
        >

            <h3>Your position: {playerPosition}</h3>
            <span>{message}</span>
        </YourPositionWrapper>

    );
};

export default YourPosition;