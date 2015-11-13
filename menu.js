import React, { Component } from 'react';
import { menuStyle } from './style';
import MenuItem from './menuitem';

class Menu extends Component {
  render() {
    let { items, level } = this.props;
    let menuItems = items.map(
      (item, index) => (
        <MenuItem 
          key={index} 
          order={index} 
          name={item.name} 
          url={item.url} 
          submenu={item.submenu}
          level={level}
        />
      )
    );
    return (
      <div style={ menuStyle(level) }>
        { menuItems }
      </div>
    );
  }
}

Menu.defaultProps = { items: [], level: 0, }

export default Menu;
