import { render } from 'react-dom';
import React from 'react';
import Menu from './menu';
import { Direction } from './constants';

let m3 = {
  position: 'down',
  layout: 'horizontal',
  items: [ {name: 'Good'}, {name: 'Let\'s Go'} ],
};

let m2 = {
  layout: 'vertical',
  position: 'right',
  items: [
    { name: 'Well', url: 't1.html' },
    { name: 'Site', url: 't2.html', submenu: m3 },
  ],
};

let m1 = {
  position: 'right',
  items: [
    { name: 'iPad Pro', url: 'a1.html', submenu: m2},
    { name: 'iPhone', url: 'a2.html'},
    { name: 'Macbook Pro', url: 'a3.html', submenu: m3},
  ],
};

let menu = {
  layout: 'vertical',
  // layout: 'horizontal',
  items: [
    { name: 'Home', url:'home.html', },
    { name: 'Articles', url:'articles.html' },
    { name: 'About', url:'about.html', submenu: m1},
  ],
};

render(
  // <Menu config = { m1 } />,
  // <Menu config = { m3 } />,
  <Menu config = { menu } />,
  document.getElementById('root')
);
