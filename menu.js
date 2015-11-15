import React, { Component } from 'react';
import { menuStyle } from './style';
import MenuItem from './menuitem';

class Menu extends Component {

  getStyle(level, position, parentWidth, parentHeight) {
    return {
      position: level==0?'relative':'absolute',

      background: 'lightgrey',

      borderStyle: 'solid',
      borderColor: 'grey',
      borderWidth: '1px',

      display: 'inline-block',
      //display: position=='right'?'inline-block':'block',
      
      boxSizing: 'border-box',
      verticalAlign: 'top',

      left: level==0 || position=='down'?0:parentWidth-1,
      top: position=='down'?parentHeight:0,

      //margin: '1em',
      //overflow: 'true',

      boxShadow: '3px 3px 5px lightgrey',
      borderRadius: '2px',
    };
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
    let style = this.getStyle(
        level, position, parentWidth, parentHeight);
    return (
      <div style={ style } >
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
