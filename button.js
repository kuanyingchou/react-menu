import React, { Component } from 'react';

class Button extends Component {
  render() {
    let { text, highlighted } = this.props;
    let style = {
    	fontFamily: 'monospace',
    	padding: '1em', 
    	textAlign: 'center',
    	color: highlighted ? 'white' : 'black',
      background: highlighted ? 'grey' : '',
    };
    return (
      <div style = { style } >
        <div> { text } </div>
      </div>
    );
  }
}

export default Button;
