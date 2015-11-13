import React, { Component } from 'react';
import { menuStyle } from './style';
import MenuItem from './menuitem';

class Menu extends Component {
  render() {
    let { items, level, expandOnHover } = this.props;
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
        />
      )
    );
    return (
      <div style={ menuStyle(level) } >
        { menuItems }
      </div>
    );
  }
}

Menu.defaultProps = { 
  items: [], 
  level: 0, 
  expandOnHover: true,
}

export default Menu;
