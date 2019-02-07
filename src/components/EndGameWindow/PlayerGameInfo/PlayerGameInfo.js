import React from 'react';
import styled from 'styled-components'

const Title = styled.h2`
display: flex;
flex-basis: 10%;
flex-flow: column nowrap;
justify-content: space-between;
align-items: center;
width: 90%;
font-size: 2rem;
transform: ${props => {
        if (props.isSended) {
            return "translateX(-110%)"
        } return null;
    }};
transition: transform .4s, flex-basis 2s .4s;
color:  ${({ theme }) => theme.colors.primary};
span{
    display: block;
    color:  ${({ theme }) => theme.colors.orange};
}
`


const PlayerGameInfo = props => {
    const { time, isSended } = props

    return (

        <Title
            isSended={isSended}
        >Well done! Your time is: <span>{time} seconds!</span></Title>

    );
};

export default PlayerGameInfo;