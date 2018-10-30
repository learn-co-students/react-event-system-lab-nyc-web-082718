import React, { Component } from 'react';

export default class Keypad extends Component {
  constructor() {
    super()
  }

  printIt = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <input type="password" onKeyUp={this.printIt} />
    )
  }
}
