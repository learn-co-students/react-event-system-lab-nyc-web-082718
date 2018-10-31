// Code Keypad Component Here
import React, { Component } from 'react';


export default class Keypad extends Component {

  myFun = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" ref="pwd" onKeyUp={this.myFun}></input>
    );
  }

}
