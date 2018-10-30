// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  message = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input type="password"
        onKeyUp={this.message}/>
      </div>
    )
  } //end of render function


}//end of keypad class

export default Keypad;
