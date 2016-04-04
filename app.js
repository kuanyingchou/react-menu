import { render } from 'react-dom';
import React from 'react';
import Menu from './menu';

let linear = { items: [ {name:'red'}, {name:'black'}, {name:'linear gray'} ] };
let tactile = { items: [ {name:'brown'}, {name:'clear'}, {name:'tactile gray'} ] };
let clicky = { items: [ {name:'blue'}, {name:'green'}, {name:'white'} ] };

let switch_types = {
  layout: 'horizontal',
  items: [ 
    { name:'linear', submenu: linear }, 
    { name:'tactile', submenu: tactile }, 
    { name:'clicky', submenu: clicky }
  ]
};

let configs = ['bottom', 'left', 'right', 'top'].map(
  (pos) => Object.assign({}, switch_types, { dposition: pos })
);

let menus = configs.map( (config, index) =>
  (
    <div>
      <Menu 
        key = { index }
        config = { config } 
        expandOnHover = { true } 
        dposition = { config.dposition }
      />
    </div>
  )
);

let numbers3 = { 
  items: [{name:'One'}, {name:'Two'}, {name:'Three'}] 
};

let numbers5 = { 
  layout: 'vertical', 
  dposition: 'right',
  items: [ 
    {name:'One', submenu: numbers3 },
    {name:'Two', submenu: numbers3 },
    {name:'Three', submenu: numbers3 },
    {name:'Four', submenu: numbers3 },
    {name:'Five', submenu: numbers3 } 
  ] 
};

let nested = { 
  items: [
    {name:'One', submenu: numbers5 },
    {name:'Two', submenu: numbers5 },
    {name:'Three', submenu: numbers5 },
    {name:'Four', submenu: numbers5 },
    {name:'Five', submenu: numbers5 },
  ] 
}

let titleStyle = {lineHeight: 4};

render(
  <div style={{ textAlign: 'center', fontFamily: 'monospace' }}>
    <h1>react-menu</h1>
    <div>
      <div style={titleStyle}> Vertical Menu </div>
      <div>
        <Menu 
          config = { numbers5 } 
          expandOnHover = { true } 
          dposition = { 'right' }
        />
      </div>
    </div>
    <div>
      <div style={titleStyle}> Horizontal Menu </div>
      <div>
        <Menu 
          config = { Object.assign({}, numbers5, {layout: 'horizontal'}) } 
          expandOnHover = { true } 
          dposition = { 'bottom' }
        />
      </div>
    </div>
    <div>
      <div style={titleStyle}> Submenu on the Bottom </div>
      { menus[0] }
    </div>
    <div>
      <div style={titleStyle}> Submenu on the Left </div>
      { menus[1] }
    </div>
    <div>
      <div style={titleStyle}> Submenu on the Right </div>
      { menus[2] }
    </div>
    <div>
      <div style={titleStyle}> Submenu on the Top </div>
      { menus[3] }
    </div>
    <div>
      <div style={titleStyle}> Menus can be nested </div>
      <div>
        <Menu 
          config = { nested } 
          expandOnHover = { true } 
          dposition = { 'right' }
        />
      </div>
    </div>
  </div>,
  document.getElementById('root')
);

