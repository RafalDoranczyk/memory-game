import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    flex-basis: 50px;
    padding: 0 15px;
    opacity: ${({isGameReady})=>isGameReady ? '1' : '.1'};
    transition: opacity .4s;
    border-radius: 100px;
    font-size: 2rem;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.primary};
    transition: .4s;
    @media (orientation: landscape) {
        font-size: 1.4rem;
        flex-basis: 30px;
        @media(min-width: 700px){
            font-size: 3.5rem;
            flex-basis: 80px;
            padding: 20px;
        }
    }
        
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
