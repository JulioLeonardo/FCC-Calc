import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';

  
  class Display extends React.Component {
    render() {
      return (
        <CardMedia>
          
            <h4 id="display">{this.props.input}</h4>
            <h4  >{this.props.result}</h4>
          
        </CardMedia>
      );
    }
  }

  export default Display
  