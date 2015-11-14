import React, { Component } from 'react';
import { menuItemStyle } from './style';
import Menu from './menu';
import { Direction } from './constants';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      highlighted: false,
      expand: false,
    };
  }
  
  handleClick(e) {
    let { url } = this.props;
    if(url) {
      window.location.href = url; //TODO: SPA?
    }
  } 
  handleMouseEnter() {
    this.setActive.bind(this)(true);
  }
  handleMouseLeave() {
    this.setActive.bind(this)(false);
  }
  setActive(active) {
    let { expandOnHover } = this.props;
    let newState = { highlighted: active };
    if(expandOnHover) {
      Object.assign(newState, { expand: active });
    }
    this.setState(newState);
  }

  render() {
    let { name, url, submenu, level, order, direction } = this.props;
    let { highlighted, expand } = this.state;
    let icon;
    if(submenu) {
      icon = expand?'-':'+';
    } else {
      icon = '*'; //'|';
    }
    return (
      <div 
          style={ menuItemStyle(highlighted) } 
          onClick={ this.handleClick.bind(this) }
          onMouseEnter={ this.handleMouseEnter.bind(this) }
          onMouseLeave={ this.handleMouseLeave.bind(this) }
          >
        { /*'|'.repeat(level)*/ }
        { /* icon */ } 
        {  ' '  } 
        { /* order +' - ' */ }
        { name }
        { 
          (expand && submenu)? 
          <Menu items={submenu} level={level+1} direction={direction} /> : 
          '' 
        }
      </div>
    );
  }
}

MenuItem.defaultProps = {
  name: '',
  url: '',
  submenu: null,
  level: 0,
  expandOnHover: true,
  direction: Direction.RIGHT,
}

export default MenuItem;
