import React from 'react'
import Buttons from './button'


class Keypad extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <div>
          {this.props.buttons.map(btnItem => {
            return (
              
                <Buttons
                  btn={btnItem}
                  handleClick={this.props.handleButtonClickParent}
                />
              
            );
          })}
        </div>
      );
    }
  }

  export default Keypad
  