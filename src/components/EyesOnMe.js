import React from 'react';
// Code EyesOnMe Component Here

class EyesOnMe extends React.Component {
  constructor() {
    super()

  }

  focusEvent = () => {
    console.log('Good!');
  }

  blurEvent = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <div>
        <button
         onFocus={this.focusEvent} onBlur={this.blurEvent}>

        </button>
      </div>
    )
  }
}

export default EyesOnMe;
