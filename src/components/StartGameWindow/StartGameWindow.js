import React from 'react';
import styled from 'styled-components'
import StartGameButton from './StartGameButton/StartGameButton';
import GameInfo from './GameInfo/GameInfo';


const StartGameWindow = styled.div`
top: ${({ isGameRunning }) => isGameRunning ? '-100%' : '0'};
position: absolute;
left: 0;
height: 100%;
width: 100%;
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
align-items: center;
background-color: #262f3d;
color: #fff;
transition: .4s;
`


const startGameWindow = props => {
    const { isGameRunning, startGame, time, isGameReady } = props

    return (

        < StartGameWindow
            isGameRunning={isGameRunning}>
            <GameInfo />
            <StartGameButton
                isGameReady={isGameReady}
                startGame={startGame}
                time={time} />
        </StartGameWindow >

    )
}


export default startGameWindow;