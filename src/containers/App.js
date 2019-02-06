import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import StartGameWindow from '../components/StartGameWindow/StartGameWindow';
import Boards from '../components/Boards/Boards';
import EndGameWindow from '../components/EndGameWindow/EndGameWindow';
import axios from 'axios';


const COLORS_API = 'https://colors-a5386.firebaseio.com/.json'

class App extends Component {

  state = {
    allColors: [], // getting all colors here from API
    renderedBoards: [], // colors for rendered boards (18)
    isGameReady: false,
    isGameRunning: false,
    clickedBoards: [],
    wait: false,
    time: 0,
    boardsDone: [],
    isStartGameWindowActive: true, //this window is showed only once

  }

  // Getting all colors from API. CHANGING STATE: ISGAMEREADY : TRUE!
  componentDidMount() {
    let { allColors, } = this.state
    axios.get(COLORS_API)
      .then(res => {
        allColors = res.data
        this.setState({ allColors, isGameReady: true, })
        this.createRenderedBoardsHandler()
      })
  }

  createRenderedBoardsHandler = () => {

    // Same allColors array, but with random position of each color
    const temporaryArray = [...this.state.allColors]
    const allColors = [];
    for (let i = 0; i < this.state.allColors.length; i++) {
      const random = Math.floor(Math.random() * temporaryArray.length)
      allColors.push(temporaryArray[random])
      temporaryArray.splice(random, 1)
    }
    //creating renderBoards color
    const { renderedBoards } = this.state
    const colorsToConcat = allColors.splice(0, 9)
    // create duplicate, we need 18 position in an array (9x2)
    const colorsToRender = colorsToConcat.concat(colorsToConcat)
    for (let i = 0; i < 18; i++) {
      const random = Math.floor(Math.random() * colorsToRender.length)
      renderedBoards[i] = {
        id: i,
        color: colorsToRender[random],
        isDone: true,
      }
      colorsToRender.splice(random, 1)
    }
    this.setState({ renderedBoards, isGameReady: true })
  }



  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state.allColors)
    const {
      clickedBoards,
      renderedBoards,
      boardsDone,
      isGameReady,
      isGameRunning } = this.state


    if (boardsDone.length === 18 && prevState.isGameRunning === true) {
      clearInterval(this.timeID)
      this.setState({ isGameReady: false, isGameRunning: false, boardsDone: [], })
      if (!prevState.isGameReady) {
        setTimeout(() => {
          this.createRenderedBoardsHandler()
        }, 2000)
      }
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
        this.setState({ clickedBoards: [], boardsDone, })
      }
    }

  }


  // STARTIN THE GAME, FUNCTION BELOW ARE TRIGGERED HERE
  startGameHandler = () => {
    console.log('djest');
    this.showBoardsForASecondHandler();
    this.countTimeHandler();
    this.setState({ isGameRunning: true, isStartGameWindowActive: false, isGameReady: false })
  }
  // works ok
  showBoardsForASecondHandler = () => {
    const renderedBoards = this.state.renderedBoards
    setTimeout(() => {
      renderedBoards.forEach(board => board.isDone = false)
      this.setState({ renderedBoards })
    }, 1400);
  }

  countTimeHandler = () => {
    let time = 0;
    this.timeID = setInterval(() => {
      time++;
      this.setState({ time })
    }, 1000);
  }

  // CLICK ON BOARD FUNCTION
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



  render() {


    const { renderedBoards, time, isGameRunning, isGameReady, isStartGameWindowActive } = this.state
    return (
      <Layout>

        <StartGameWindow
          isGameRunning={isGameRunning}
          startGame={this.startGameHandler}
          time={time}
          isGameReady={isGameReady}
          isStartGameWindowActive={isStartGameWindowActive}
        />
        <Boards
          clickBoard={this.clickOnBoardHandler}
          renderedBoards={renderedBoards}
          giveColors={this.giveRandomColorsHandler} />

        <EndGameWindow
          isGameReady={isGameReady}
          isGameRunning={isGameRunning}
          time={time}
          startGame={this.startGameHandler}
        />
      </Layout>


    )
  }
}

export default App;
