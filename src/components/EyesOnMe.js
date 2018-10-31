// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component {
  handelOnFocus= ()=>{
    console.log('Good!')
  }
  handelOnBlur = (e)=>{
    console.log('Hey! Eyes on me!')
  }


  render(){
    return (<button onFocus={this.handelOnFocus} onBlur={this.handelOnBlur} >click me </button>)
  }
}
