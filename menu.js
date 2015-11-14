import React, { Component } from 'react';
import { menuStyle } from './style';
import MenuItem from './menuitem';
import { Direction } from './constants';

class Menu extends Component {
  render() {
    let { items, level, expandOnHover, direction } = this.props;
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
          direction={ item.direction?item.direction.toUpperCase():null }
        />
      )
    );
    return (
      <div style={ menuStyle(level, direction) } >
        { menuItems }
      </div>
    );
  }
}

Menu.defaultProps = { 
  items: [], 
  level: 0, 
  expandOnHover: true,
  direction: Direction.RIGHT,
}

export default Menu;
