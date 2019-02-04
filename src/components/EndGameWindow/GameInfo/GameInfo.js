import React from 'react';
import styled from 'styled-components'
import BestResultsBoard from './BestResultsBoard/BestResultsBoard';
import { SpinnerStyle } from '../../UI/Spinner/Spinner'

const GameInfoWrapper = styled.div`
position: absolute;
top: 0;
left: 2%;
right: 2%;
bottom: 50vh;
display: flex;
flex-flow: column nowrap;
align-items: center;
text-align: center;
`
const TitleStyle = styled.h1`
position: absolute;
top: 50%;
left: ${props => {
        if (props.isSended) return '200%'
        return '50%'
    }};
width: 90%;
font-size: 22px;
transform: translate(-50%,-50%);
transition: .9s;

span{
    display: block;
    width: 100%;
    color: gold;
    margin-top: 5px;
    font-size: 16px;
}
    `

const Spinner = styled(SpinnerStyle)`
position: absolute;
top: 50%;
transform: translate(-50%,-50%);
`

const GameInfo = props => {
    const { fetchedResults, isSended, time } = props

    return (
        <GameInfoWrapper
            fetchedResults={fetchedResults}>
            <BestResultsBoard
                fetchedResults={fetchedResults}
            />
            <TitleStyle
                isSended={isSended}
            >Well done! Your time is: <span>{time} seconds! </span>
            </TitleStyle>
            {isSended && fetchedResults.length === 0 ? <Spinner /> : null}
        </GameInfoWrapper>
    );
};

export default GameInfo;