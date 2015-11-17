import React, { Component } from 'react';
import MenuItem from './menuitem';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  componentDidMount() {
    let dom = this.refs.menu;
    this.setState({width: dom.offsetWidth, height: dom.offsetHeight});
  }

  getPositionStyle(level, position, width, height, parentWidth, parentHeight) {
    if(level == 0) return {};
    switch(position) {
    case 'top':
      return {
        left: 0,
        top: -height,
      };
    case 'down':
      return {
        left: 0,
        top: parentHeight,
      };
    case 'left':
      return {
        left: -width,
        top: 0,
      };
    case 'right':
      return {
        left: parentWidth,
        top: 0,
      };
    default:
      console.log(`cannot recognize position: ${position}`);
    }
  }

  getStyle(level, position, width, height, parentWidth, parentHeight) {
    let style = {
      position: level==0?'relative':'absolute',
      display: 'inline-block',
      //display: position=='right'?'inline-block':'block',
      boxSizing: 'border-box',
      verticalAlign: 'top',
      left: 0,
      top: 0,
      // left: level==0 || position=='down'?0:parentWidth-1,
      // top: position=='down'?parentHeight-1:0,
      zIndex: level,

      // users should be able to change these
      borderStyle: 'solid',
      borderColor: 'grey',
      borderWidth: '1px',
      background: 'lightgrey',
      boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
      borderRadius: '2px',
    };
    return Object.assign(style,
      this.getPositionStyle(level, position, width,
          height, parentWidth, parentHeight));
  }

  render() {
    let {
      config, level, expandOnHover, parentWidth, parentHeight
    } = this.props;
    let { items, layout, position } = config;
    let menuItems = items.map(
      (item, index) => (
        <MenuItem
          key={index}
          order={index}

          name={item.name}
          url={item.url}
          submenu={item.submenu}

          level={level}
          expandOnHover={expandOnHover}
          position={ position }
          layout={ layout }
        />
      )
    );
    let { width, height } = this.state;
    let style = this.getStyle(
        level, position, width, height, parentWidth, parentHeight);
    return (
      <div style={ style } ref="menu" >
        { menuItems }
      </div>
    );
  }
}

Menu.defaultProps = {
  config: {},
  level: 0,
  expandOnHover: true,
  parentWidth: 0,
  parentHeight: 0,
}

export default Menu;
