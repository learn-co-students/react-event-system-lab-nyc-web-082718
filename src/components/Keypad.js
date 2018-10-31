import React from 'react';
// Code Keypad Component Here
class Keypad extends React.Component {
  constructor() {
    super()

  }

  monitorKeyboard = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.monitorKeyboard}/>
      </div>
    )
  }
}

export default Keypad;
