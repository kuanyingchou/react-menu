import React, { Component } from 'react';
import { menuItemStyle } from './style';
import Menu from './menu';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      highlighted: false,
      expand: false,
    };
  }
  
  handleClick(e) {
    e.stopPropagation(); //!
    let { expand } = this.state;
    let { submenu, name } = this.props;
    //console.log(`click ${name}`);
    this.setState({ expand: !expand });
    if(!submenu) {
      let { url } = this.props;
      window.location.href = url; //TODO: SPA?
    }
  } 
  handleMouseEnter() {
    this.setState({highlighted: true});
  }
  handleMouseLeave() {
    this.setState({highlighted: false});
  }
  render() {
    let { name, url, submenu, level, order } = this.props;
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
        { icon } 
        { ' ' } 
        { order +' - ' }
        { name }
        { (expand && submenu)? <Menu items={submenu} level={level+1}/> : '' }
      </div>
    );
  }
}

MenuItem.defaultProps = {
  name: '',
  url: '',
  submenu: null,
  level: 0,
}

export default MenuItem;
