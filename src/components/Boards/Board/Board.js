import React from 'react';
import styled from 'styled-components'


const Board = styled.div`
    flex-basis: 15%;
    flex-grow: 1;
    height: 33.33vh;
    box-shadow: 0 0 1px 1px ${({theme})=>theme.colors.silver};
    cursor: pointer;
    @media(orientation: portrait){
            height: 16.66vh;
            flex-basis: 33.30%;
    }
`



const board = props => {
    const { isDone, boardColor, clickBoard } = props

    const isBoardDone = isDone ? boardColor : '#484848'
    const renderedBoardCokor = { backgroundColor: isBoardDone }

    return (
        <Board
            style={renderedBoardCokor}
            onClick={clickBoard}
        />

    )
}

export default board;