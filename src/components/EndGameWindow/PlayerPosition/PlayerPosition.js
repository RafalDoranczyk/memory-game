import React from 'react';
import styled from 'styled-components'


const YourPositionWrapper = styled.div`
width: 90%;
flex-basis: 10%;
display: flex;
flex-flow: column nowrap;
justify-content: space-between;
align-items: center;
text-align: center;
margin-bottom: ${props => {
        if (props.isSended) return '2rem'
        return '0'
    }};
transition: margin-bottom .4s;

span,h3{
    margin: auto; 
}
h3{
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.8rem;
}
span{
    display: block;
    text-align: center;
    font-size: 1.6rem;
    transition: transform .4s;
    color: ${({ theme }) => theme.colors.orange};
}
`


const YourPosition = props => {

    const { playerPosition, isSended } = props
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