import React, { Component } from 'react';

class Button extends Component {
  render() {
    let { text, highlighted, level } = this.props;
    let style = {
      position: 'relative',
    	fontFamily: 'monospace',
    	padding: '1em', 
    	textAlign: 'center',
    	color: highlighted ? 'white' : 'black',
      background: highlighted ? 'grey' : ''
    };
    return (
      <div style = { style } >
        <div> { text } </div>
      </div>
    );
  }
}

export default Button;
