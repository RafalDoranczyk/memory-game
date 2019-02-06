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
span,h3{
    margin: auto; 
   
}
span{
    text-align: center;
    transition: transform .4s;
    display: block;
    color: #FFA611;
}
`


const YourPosition = props => {

    const { playerPosition, } = props
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
        >

            <h3>Your position: {playerPosition}</h3>
            <span>{message}</span>
        </YourPositionWrapper>

    );
};

export default YourPosition;