// Code EyesOnMe Component Here
import React, { Component } from 'react';


export default class EyesOnMe extends Component {

focusFun = () => {
  console.log('Good!')
}

blurFun = () => {
  console.log('Hey! Eyes on me!')
}

  render() {
    return (
      <button onFocus={this.focusFun} onBlur={this.blurFun}>MyButton</button>
    );
  }

}
