import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
flex-basis: 10%;
padding: 0 5%;
opacity: ${props => {
        if (props.isGameReady) return '1'
        return '.1'
    }};
transition: opacity .4s;
border-radius: 100px;
font-size: 2rem;
background-color: ${({ theme }) => theme.colors.blue};
color: ${({ theme }) => theme.colors.primary};
transition: .4s;

:hover{
    color : ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.primary};
}
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
