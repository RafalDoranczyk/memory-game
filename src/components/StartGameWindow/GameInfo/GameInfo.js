import React from 'react';
import styled from 'styled-components'

const GameInfoWrapper = styled.div`
width: 80%;
flex-basis: 60%;
display: flex;
flex-flow: column nowrap;
justify-content: space-evenly;
text-align: justify;
letter-spacing: 1px;

h1{
    font-size: 22px;
    text-align: center;
}
p{
   color: #ddd;
}
`





const GameInfo = props => {
    return (
        <GameInfoWrapper>
            <h1>Memory Game!</h1>
            <p>The game is simple - you have 9 pairs of colors to find as fast as you can. You will have 1 second to remember colors position. Start the game and let the timer begin! Compare your result with others!</p>
        </GameInfoWrapper>
    );
};

export default GameInfo;