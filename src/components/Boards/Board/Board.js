import React from 'react';
import styled from 'styled-components'


const Board = styled.div`
    flex-basis: 15%;
    flex-grow: 1;
    height: 33.33vh;
    background-color: gray;
    border: 1px solid white;

@media(orientation: portrait){
        height: 16.66vh;
        flex-basis: 33.30%;
}
`



const board = props => {
    const { isDone, boardColor, clickBoard } = props

    const isBoardDone = isDone ? boardColor : '#555'
    const renderedBoardCokor = { backgroundColor: isBoardDone }


    return (
        <Board
            style={renderedBoardCokor}
            onClick={clickBoard}
        />

    )
}

export default board;