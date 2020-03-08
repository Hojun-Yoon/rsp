import React, { Component } from 'react';
import Game from './Game';
import {Link} from 'react-router-dom';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startChkBoolean: false
    }
  }
  handleOnClick = () => {
    this.setState({
      startChkBoolean: true
    })
  }
  render() {
    return (
      <div>
        {/* { {this.state.startChkBoolean === false ?
        <button onClick = {this.handleOnClick}>게임 시작하기</button> : }
        } */}
        <Link to={"/game"} onClick={this.handleOnClick}>게임 시작하기</Link>
      </div>
    );
  }
}

export default Start;