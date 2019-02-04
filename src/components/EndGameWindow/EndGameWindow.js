import React, { Component } from 'react';
import styled from 'styled-components';
import GameInfo from './GameInfo/GameInfo';
import SendResult from './SendResult/SendResult';
import axios from 'axios';
import { Button } from '../StartGameWindow/StartGameButton/StartGameButton'
const EndGameWindowWrapper = styled.div`
top: ${({ isGameRunning, time }) => {
        if (!isGameRunning && time > 0) {
            return '0'
        }
        else return '-100%'
    }};
position: absolute;
left: 0;
height: 100%;
width: 100%; 
background-color: #222;
color: #fff;
transition: .4s;
font-size: 12px;

`
const StartAnotherGameButton = styled(Button)`
position: absolute;
top: 85vh;
height: 10vh;
left: 50%;
width: 60%;
font-size: 14px;
transform: translateX(-50%);
border: ${props => {
        if (props.fetchedResults.length > 0) return '1px solid gold'
    }};
color: ${props => {
        if (props.fetchedResults.length > 0) return 'gold'
    }};
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
        const { name } = this.state
        const time = this.props.time
        const result = { name, time }
        e.preventDefault()
        if (name) {
            this.setState({ isSended: true })
            axios.post(API, result)
                .then(res => {
                    axios.get(API)
                        .then(res => {
                            let data = Object.values(res.data);
                            const times = [];
                           data.map(result=>(
                               times.push(result.time)
                           ))
                           ;
                           const playerPosition = 1 + times.sort((a,b)=>{
                               return a-b
                           }).findIndex(time=>(
                             time===this.props.time
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
                           
                            this.setState({ fetchedResults: data,playerPosition  })
                        })
                }
                )

        } else {
            alert('Enter your name!')
        }

    }



    render() {

        const { name, isSended, fetchedResults,playerPosition } = this.state
        const { time, isGameRunning } = this.props

        return (
            <EndGameWindowWrapper
                isGameRunning={isGameRunning}
                time={time}>


                <GameInfo
                    fetchedResults={fetchedResults}
                    time={time}
                    isSended={isSended}
                />


                <SendResult
                    fetchedResults={fetchedResults}
                    isSended={isSended}
                    changeName={this.changeNameHandler}
                    name={name}
                    postAndGetResults={this.postAndGetResultsHandler}
                    playerPosition={playerPosition}
                />

                <StartAnotherGameButton
                    fetchedResults={fetchedResults}
                >    Start another game!
                
                </StartAnotherGameButton>

            </EndGameWindowWrapper>
        );
    }
};

export default EndGameWindow;