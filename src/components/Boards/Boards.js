import React from 'react';
import Board from './Board/Board';
import styled from 'styled-components';


const BoardWrapper = styled.div`
height: 100vh;
display: flex;
flex-flow: row wrap;
`


const boards = props => {

    const renderedBoards = props.renderedBoards.map(board => (
        <Board
            key={board.id}
            boardColor={board.color}
            isDone={board.isDone}
            clickBoard={e => props.clickBoard(e, board.id)}
        />
    ))


    return (
        <BoardWrapper>
            {renderedBoards}
        </BoardWrapper>
    );
};

export default boards;