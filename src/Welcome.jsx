import React, { Component } from 'react';

class Welcome extends Component {
  state = {
    welcomeMessage: 'Welcome!'
  };
  render() {
    return (
        <h1>{this.state.welcomeMessage}</h1>
    );
  }
}

export default Welcome;
