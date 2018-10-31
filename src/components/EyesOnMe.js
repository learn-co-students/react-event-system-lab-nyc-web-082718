// Code EyesOnMe Component Here
import React, { Component } from 'react';


export default class EyesOnMe extends Component {

  looking = () => {
    console.log('Good!')
  }

  lookedAway = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
    <button onFocus={this.looking} onBlur={this.lookedAway}></button>
    )
  }
}
