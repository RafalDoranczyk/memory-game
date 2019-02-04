import React from 'react';
import styled from 'styled-components';


export const Button = styled.button`
padding: 5px 10px;
background-color: transparent;
border: 1px solid #fff;
border-radius: 50px;
font-size: 20px;
color: gold;
cursor: pointer;
font-weight: 900;
opacity: ${props => {
        if (props.isGameReady) return '1'
        return '.4'
    }};
transition: opacity .4s;
`

const startGameButton = props => {
    const { time, startGame, isGameReady } = props

    const message = time === 0 ? 'StartGame' : 'Start another game!'

    return (
        <Button
            disabled={isGameReady ? false : true}
            isGameReady={isGameReady}
            onClick={startGame}>
            {message}
        </Button>
    )
}

export default startGameButton;
