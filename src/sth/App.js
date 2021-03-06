import React, { Component } from "react";
import { Link } from "react-router-dom";
class App extends Component {
  setHalfVolume = (event) => {
    event.target.volume = 0.4;
  };

  render() {
    return (
      <div className='titlePage'>
        <audio
          id='audio'
          src='../images/overtaken.mp3'
          onLoadedData={this.setHalfVolume}
          autoPlay
        />
        <Link className='title' to='/Home'>
          <img
            className='oplogo'
            src='../images/onepiecelogo1.png'
            alt='logo'
          />
          <img className='powerup' src='../images/luf.gif' alt='power' />
        </Link>
      </div>
    );
  }
}

export default App;
