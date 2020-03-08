import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class End extends Component {
  render() {
    return (
      <div>
        <div><Link to= {"/"}>처음으로</Link></div>
        <div><Link to= {"/game"}>다시 도전하기</Link></div>
      </div>
    );
  }
}

export default End;