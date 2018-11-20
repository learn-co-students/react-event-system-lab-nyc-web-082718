// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

  onFocusListener = () => {
    console.log("Good!")
  }

  onBlurListener = () => {
    console.log("Hey! Eyes on me!")
  }


  render() {
    return(
      <div>
        <button onFocus={this.onFocusListener} onBlur={this.onBlurListener}>Click</button>
      </div>
    )
  }
}
