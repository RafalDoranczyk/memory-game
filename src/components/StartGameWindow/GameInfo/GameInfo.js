import React from 'react';
import styled from 'styled-components'

const GameInfoWrapper = styled.div`
    width: 80%;
    flex-basis: 60%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    text-align: justify;
    letter-spacing: 1px;
    font-size: 1.4rem;
    @media (min-width: 700px){
        font-size: 1.8rem;
    }
   & h1{
        text-align: center;
        color: ${({ theme }) => theme.colors.orange}
    }
   & p{
        margin-top: 5%;
        color: ${({ theme }) => theme.colors.primary};
        line-height: 140%;
    }
    @media(min-width: 490px){
        width: 60%;
        p{
            line-height: 160%;
        }
    }
    @media (min-width: 800px){
        width: 50%;
        p{
            line-height: 180%;
        }
    }
    @media(min-width: 1200px){
        width: 30%;
        p{
            line-height: 200%;
        }
    }
`



const GameInfo = () => {
    return (
        <GameInfoWrapper >
            <h1>Memory Game!</h1>
            <p>The game is simple - you have 9 pairs of colors to find as fast as you can. You will have 1 second to remember colors position. Start the game and let the timer begin! Compare your result with others!</p>
        </GameInfoWrapper>
    );
};

export default GameInfo;