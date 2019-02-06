import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
position: absolute;
top: 85vh;
left: 50%;
transform: translateX(-50%);
padding: 15px 25px;

opacity: ${props => {
        if (props.isGameReady) return '1'
        return '.1'
    }};
transition: opacity .4s;
border-radius: 100px;
background-color: #059BE5;
font-size: 20px;
color: #fff;
font-weight: 900;
border: none;
cursor: pointer;
`
const startGameButton = props => {
    const { startGame, isGameReady } = props

    return (
        <Button
            disabled={isGameReady ? false : true}
            isGameReady={isGameReady}
            onClick={startGame}>
            Start Game!
        </Button>
    )
}

export default startGameButton;
