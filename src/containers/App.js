import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import StartGameWindow from '../components/StartGameWindow/StartGameWindow';
import Boards from '../components/Boards/Boards';
import EndGameWindow from '../components/EndGameWindow/EndGameWindow';
import axios from 'axios';


const COLORS_API = 'https://colors-a5386.firebaseio.com/.json'

class App extends Component {

  state = {
    allColors: [],
    renderedBoards: [],
    isGameReady: false,
    isGameRunning: false,
    clickedBoards: [],
    wait: false,
    time: 121,
    boardsDone: [],
  }

  // works ok
  componentDidMount() {
    const { isGameReady, allColors } = this.state

    axios.get(COLORS_API)
      .then(res => {
        const dataColors = res.data;
        for (let i = 0; i < 18; i++) {
          const random = Math.floor(Math.random() * dataColors.length);
          allColors[i] = res.data[random]
          dataColors.splice(random, 1)
        }
        this.setState({ allColors, isGameReady: true })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      clickedBoards,
      renderedBoards,
      boardsDone,
      isGameRunning } = this.state

    if (boardsDone.length === 18 && prevState.isGameRunning === true) {
      clearInterval(this.timeID)
      this.setState({ isGameRunning: false })

    }

    if (isGameRunning) {
      if (this.state.clickedBoards.length === 2) {
        if (clickedBoards[0].color !== clickedBoards[1].color) {
          this.setState({ wait: true })
          setTimeout(() => {
            renderedBoards[clickedBoards[0].id].isDone = false
            renderedBoards[clickedBoards[1].id].isDone = false
            this.setState({ renderedBoards, wait: false })
          }, 350)

        } else {
          boardsDone.push(clickedBoards[0].id)
          boardsDone.push(clickedBoards[1].id)


        }
        this.setState({ clickedBoards: [], boardsDone })
      }
    }

  }

  // works ok
  giveRandomColorsHandler = () => {
    const { renderedBoards } = this.state
    let { allColors } = this.state


    allColors = allColors.splice(1, 9)
    for (let i = 0; i < 9; i++) {
      allColors.push(allColors[i])
    }
    for (let i = 0; i < 18; i++) {
      const random = Math.floor(Math.random() * allColors.length);
      renderedBoards[i] = {
        id: i,
        color: allColors[random],
        isDone: true,
      }
      allColors.splice(random, 1)
    }

    this.setState({ renderedBoards })

  }

  // works ok
  showBoardsForASecondHandler = () => {
    const renderedBoards = this.state.renderedBoards;
    setTimeout(() => {
      renderedBoards.forEach(board => board.isDone = false)
      this.setState({ renderedBoards })
    }, 1400);
  }

  countTimeHandler = () => {
    let time = this.state.time;
    this.timeID = setInterval(() => {
      time++;
      this.setState({ time })
    }, 1000);

  }

  clickOnBoardHandler = (e, id) => {
    const { renderedBoards, clickedBoards } = this.state
    const index = renderedBoards.findIndex(board => (
      board.id === id
    ))
    if (renderedBoards[index].isDone) return
    if (this.state.wait) return
    renderedBoards[index].isDone = true;
    clickedBoards.push(renderedBoards[index])
    this.setState({ renderedBoards, clickedBoards })
  }

  // works ok
  startGameHandler = () => {
    this.giveRandomColorsHandler();
    this.showBoardsForASecondHandler();
    this.countTimeHandler();
    this.setState({ isGameRunning: true })
  }


  render() {


    const { renderedBoards, time, isGameRunning, isGameReady } = this.state
    return (
      <Layout>

        <StartGameWindow
          isGameRunning={isGameRunning}
          startGame={this.startGameHandler}
          time={time}
          isGameReady={isGameReady}
        />
        <Boards
          clickBoard={this.clickOnBoardHandler}
          renderedBoards={renderedBoards}
          giveColors={this.giveRandomColorsHandler} />

        <EndGameWindow
          isGameRunning={isGameRunning}
          time={time}
        />
      </Layout>


    )
  }
}

export default App;
