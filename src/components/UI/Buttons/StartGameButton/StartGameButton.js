import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
flex-basis: 10%;
padding: 0 25px;
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
    const { isGameReady, startGame } = props
    return (
        <Button
            disabled={isGameReady ? false : true}
            isGameReady={isGameReady}
            onClick={startGame}
        >
            {props.children}
        </Button>
    )
}

export default startGameButton;
