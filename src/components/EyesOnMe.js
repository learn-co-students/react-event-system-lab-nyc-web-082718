import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  constructor() {
    super()
  }

  sayGood() {
    console.log('Good!')
  }

  sayBad() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.sayGood} onBlur={this.sayBad}>
      </button>
    )
  }
}
