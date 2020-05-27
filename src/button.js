import React from 'react'
import Button from '@material-ui/core/Button';


class Buttons extends React.Component {
    constructor(props) {
      super(props);
      this.runHandleClick = this.runHandleClick.bind(this);
    }
  
    runHandleClick = () => {
      this.props.handleClick(this.props.btn);
    };
  
    render() {
      return (
        <Button
          id={this.props.btn.id}
          className={"btn "+this.props.btn.type}
          onClick={this.runHandleClick}
        >
          {this.props.btn.name}
        </Button>
      );
    }
  }
  
export default Buttons