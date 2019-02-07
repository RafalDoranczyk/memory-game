import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StartGameButton from '../UI/Buttons/StartGameButton/StartGameButton'
import PlayerGameInfo from './PlayerGameInfo/PlayerGameInfo';
import SendResultForm from './SendResultForm/SendResultForm';
import BestResultsBoard from './BestResultsBoard/BestResultsBoard';
import PlayerPosition from './PlayerPosition/PlayerPosition';
import Spinner from '../UI/Spinner/Spinner';

const EndGameWindowWrapper = styled.div`
${({ theme }) => theme.mixins.absolutePosition(0, 0)}
height: 100%;
width: 100%; 
padding: 1rem;
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
align-items: center;
transform:  ${({ isGameRunning, time }) => {
        if (!isGameRunning && time > 0) {
            return 'translateY(0)'
        } return 'translateY(-100%)'
    }};
transition: transform .5s;
background-color: ${({ theme }) => theme.colors.darkBackground};
color: ${({ theme }) => theme.colors.primary};
`

const FormAndResultsBoardWrapper = styled.div`
flex-basis: ${({ isSended }) => isSended ? '60%' : '40%'};
transform: ${({ isSended }) => isSended ? 'translateY(-10%)' : '0'};
width: 90%;
transition: .5s .5s;
background-color: ${({ theme }) => theme.colors.darkBackground};
box-shadow: 0 0 25px 0 ${({ theme }) => theme.colors.orange};
border-radius: 2rem;
text-align: center;
position: relative;
top: 0;
left: 0;

@media(min-width: 600px){
    width: 80%;
}
@media(min-width: 800px){
    width: 70%;
}
@media(min-width: 1000px){
    width: 60%;
}
@media(min-width: 1200px){
    width: 50%;
}
`

const API = 'https://colors-results.firebaseio.com/.json'
class EndGameWindow extends Component {


    state = {
        name: '',
        fetchedResults: [],
        isSended: false,
        playerPosition: '',
    }

    changeNameHandler = e => {
        e.preventDefault()
        this.setState({ name: e.target.value })
    }


    postAndGetResultsHandler = e => {
        e.preventDefault()
        const { name } = this.state
        const time = this.props.time
        const result = { name, time }
        if (name) {
            this.setState({ isSended: true })

            axios.post(API, result)
                .then(res => {
                    axios.get(API)
                        .then(res => {
                            let data = Object.values(res.data);
                            const times = [];
                            data.map(result => (
                                times.push(result.time)
                            ))
                                ;
                            const playerPosition = 1 + times.sort((a, b) => {
                                return a - b
                            }).findIndex(time => (
                                time === this.props.time
                            ))

                            function compare(a, b) {
                                const timeA = a.time
                                const timeB = b.time
                                let comparison = 0;
                                if (timeA > timeB) {
                                    comparison = 1
                                } else if (timeA < timeB) {
                                    comparison = -1;
                                }
                                return comparison;
                            }
                            data.sort(compare)
                            data = data.splice(0, 10);

                            this.setState({ fetchedResults: data, playerPosition })
                        })
                }
                )

        } else {
            alert('Enter your name!')
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.fetchedResults.length > 0 && this.props.isGameRunning) {
            setTimeout(() => {
                this.setState({ fetchedResults: [], isSended: false, playerPosition: '', name: '' })
            }, 1000);

        }
    }


    render() {

        const { name, isSended, fetchedResults, playerPosition } = this.state
        const { time, isGameRunning } = this.props



        return (
            <EndGameWindowWrapper
                isGameRunning={isGameRunning}
                time={time} >

                <PlayerGameInfo
                    isSended={isSended}
                    time={time} />


                <FormAndResultsBoardWrapper
                    isSended={isSended}>

                    {fetchedResults.length > 0 && <BestResultsBoard
                        fetchedResults={fetchedResults}
                        isSended={isSended}
                    />}

                    <SendResultForm
                        isSended={isSended}
                        fetchedResults={fetchedResults}
                        postAndGetResults={this.postAndGetResultsHandler}
                        name={name}
                        changeName={this.changeNameHandler} />

                    {fetchedResults.length === 0 && isSended && <Spinner />}

                </FormAndResultsBoardWrapper>


                <PlayerPosition
                    isSended={isSended}
                    playerPosition={playerPosition}
                />

                <StartGameButton
                    isGameReady={this.props.isGameReady}
                    startGame={this.props.startGame}
                    fetchedResults={fetchedResults}>
                    Play Again!</StartGameButton>


            </EndGameWindowWrapper>
        );
    }
};

export default EndGameWindow;