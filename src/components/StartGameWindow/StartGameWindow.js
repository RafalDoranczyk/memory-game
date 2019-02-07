import React from 'react';
import styled from 'styled-components'
import StartGameButton from '../UI/Buttons/StartGameButton/StartGameButton'
import GameInfo from './GameInfo/GameInfo';


const StartGameWindowWrapper = styled.div`
${({ theme }) => theme.mixins.absolutePosition(0, 0)}
height: 100%;
width: 100%;
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
align-items: center;
transform:${({ isStartGameWindowActive }) => {
        if (!isStartGameWindowActive) {
            return 'translateX(-100%)'
        }
    }};
    transition:  transform .4s;
background-color: ${({ theme }) => theme.colors.darkBackground};
`

const startGameWindow = props => {
    const { startGame, time, isGameReady, isStartGameWindowActive } = props

    return (

        < StartGameWindowWrapper
            isStartGameWindowActive={isStartGameWindowActive}>
            <GameInfo />
            <StartGameButton
                isGameReady={isGameReady}
                startGame={startGame}
                time={time}>

                Start Game
                </StartGameButton>
        </StartGameWindowWrapper >

    )
}


export default startGameWindow;