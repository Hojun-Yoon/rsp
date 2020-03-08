import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 1,
      userWinSet : 0,
      computerWinSet: 0,
      win: 0,
      lose: 0,
      timer: 10,
      computerAction: '',
      gameChk: true,
      refreshChk: false
    }
  }

  componentDidMount() {
    const randomAction = ['rock', 'scissor', 'paper']
    this.setState({
      computerAction: randomAction[Math.floor(Math.random() * 3)]
    })
    this.startTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  startTimer = () => {
    if (this.state.timer >= 0 && this.state.gameChk) {
      this.timeInterval = setInterval(() => {
        this.setState({
          timer: this.state.timer - 1
        })
      }, 1000)
    }
  }

  handleOnClick = (e) => {
    const {win, lose, computerAction, round, userWinSet, computerWinSet} = this.state
    if (e.target.id === 'rock' && computerAction === 'scissor') {
      this.setState({
        win: win + 1
      })
      alert('이겼습니다.')
    } else if (e.target.id === 'rock' && computerAction === 'paper') {
      this.setState({
        lose: lose + 1
      })
      alert('졌습니다.')
    } else if (e.target.id === 'scissor' && computerAction === 'rock') {
      this.setState({
        lose: lose + 1
      }) 
      alert('졌습니다.')
    } else if (e.target.id === 'scissor' && computerAction === 'paper') {
      this.setState({
        win: win + 1
      })
      alert('이겼습니다.')
    } else if (e.target.id === 'paper' && computerAction === 'rock') {
      this.setState({
        win: win + 1
      })
      alert('이겼습니다.')
    } else if (e.target.id === 'paper' && computerAction === 'scissor') {
      this.setState({
        lose: lose + 1,
      })
      alert('졌습니다.')
    }

    this.computerActionChange();
    this.setState({
      timer: 10,
    })
  }

  roundChange = () => {
    const {win, lose, round, userWinSet, computerWinSet} = this.state
    if(win === 2) {
      this.setState({
        round: round + 1,
        userWinSet: userWinSet + 1,
        win: 0,
        lose: 0
      })
    } else {
      this.setState({
        round: round + 1,
        computerWinSet: computerWinSet + 1,
        win: 0,
        lose: 0
      })
    }
  }
  
  timerLose = () => {
    console.log(this.state.lose)
    this.setState({
      lose: this.state.lose + 1,
      timer: 10
    })  
  }

  computerActionChange = () => {
    const randomAction = ['rock', 'scissor', 'paper']
    this.setState({
      computerAction: randomAction[Math.floor(Math.random() * 3)]
    })
  }

  refreshFunction = () => {
    window.location.replace('/end')
  }

  timeStopFunction = () => {
    this.setState({
      gameChk: false,
      userWinSet: 0,
      computerWinSet: 0
    })
  }

  render() {
    const {round, win, lose, timer, userWinSet, computerWinSet, refreshChk} = this.state
    // console.log('승, 패', win, lose)
    // console.log('refreshChk data', refreshChk)
    if (win === 2 || lose === 2) {
      if (userWinSet < 3 && computerWinSet < 3) {
        this.roundChange()
        alert('다음 라운드로 넘어갑니다.')
      }
    }
    if (userWinSet === 2) {
      alert('당신이 이겼습니다. 축하합니다.')
      this.timeStopFunction()
      this.refreshFunction()
    }
    if (computerWinSet === 2) {
      alert('컴퓨터가 이겼습니다. 다시 도전해보세요.')
      this.timeStopFunction()
      this.refreshFunction()
    }
    return (
      <div>
        {/* {refreshChk ? window.location = 'localhost:3000/end' : null} */}
        <h1>제한시간 안에 가위, 바위, 보 중에 결정해주세요.</h1>
        {timer >= 0 ? 
          <h1>Current Time: {timer}</h1> 
          :
          <h1>Current Time: 0</h1> 
        }
        {
          timer === 0 ?
          this.timerLose() && alert('제한시간을 초과하여 졌습니다. YOU LOSE')
          :
          null
        }
        <button id="rock" onClick = {this.handleOnClick}>가위</button>
        <button id="scissor" onClick = {this.handleOnClick}>바위</button>
        <button id="paper" onClick = {this.handleOnClick}>보</button>
        <h3>라운드 : {round}</h3>
        <h3>승 : {win}</h3>
        <h3>패 : {lose}</h3>
      </div>
    );
  }
}

export default Game;

