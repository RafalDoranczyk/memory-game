import React from 'react';
import styled from 'styled-components'


const YourPositionWrapper = styled.div`
position: absolute;
top: 51vh;
left: 5%;
height: 25vh;
width: 90%;
display: flex;
justify-content: space-around;
align-items: center;
opacity: ${props => {
        if (props.fetchedResults.length > 0) return '1'
        return '0'
    }};
z-index: ${props => {
        if (props.fetchedResults.length > 0) return '1'
        return '-1'
    }};
transition: .5s;
background-color: #333;
border: 1px solid gold;
border-radius: 15px;
h3{
   padding: 5%;
}
span{
    /* margin-top: 80px; */
    display: block;
    width: 100%;
}

`




const YourPosition = props => {
    const { fetchedResults, playerPosition } = props
    const messagee = () => {
        if (playerPosition === 1) {
            return message = `Wooohoo! You're the best here!`
        }
        else if (playerPosition > 1 && playerPosition < 5) {
            return message = `Good job!`
        } else if (playerPosition >= 5 && playerPosition <= 10) {
            return message = `You have your name on the board! It's quite good, isn't it?`
        } else if (playerPosition > 10) {
            return message = `Man...Stop afking, start playing.`
        }
        else if (playerPosition > 15) {
            return message = `Only WolnyWiesiek is worse than you...`
        }

    }

    let message = messagee()





    return (
        <YourPositionWrapper
            fetchedResults={fetchedResults}
        >
            <h3>Your position: {playerPosition}<span> {message}</span></h3>
        </YourPositionWrapper>
    );
};

export default YourPosition;