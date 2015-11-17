import { render } from 'react-dom';
import React from 'react';
import Menu from './menu';
import { Direction } from './constants';

let thm = {
  position: 'top',
  layout: 'horizontal',
  items: [ {name: '1'}, {name: '2'} ],
}

let lhm = {
  position: 'left',
  layout: 'horizontal',
  items: [ {name: '1'}, {name: '2'} ],
};

let dhm = {
  position: 'down',
  layout: 'horizontal',
  items: [ {name: '1'}, {name: '2'} ],
};

let rhm = {
  layout: 'horizontal',
  position: 'right',
  items: [
    { name: 'Well', url: 't1.html' },
    { name: 'Site', submenu: dhm },
  ],
};

// let m1 = {
//   position: 'right',
//   items: [
//     { name: 'iPad Pro', submenu: m2},
//     { name: 'iPhone', url: 'a2.html'},
//     { name: 'Macbook Pro', submenu: m3},
//   ],
// };

let menu = {
  layout: 'horizontal',
  // layout: 'horizontal',
  items: [
    { name: 'Right', url:'home.html', submenu: rhm},
    { name: 'Left', url:'home.html', submenu: lhm},
    { name: 'Top', url:'articles.html', submenu: thm },
    { name: 'Down', submenu: dhm },
  ],
};

render(
  // <Menu config = { m1 } />,
  // <Menu config = { m3 } />,
  <div style={{ textAlign: 'center', }}>
    <p>
      This is the header.
    </p>
    <div>
      <Menu config = { menu } expandOnHover={ true } />
    </div>
    <p>
      This is the footer.
    </p>
  </div>,
  document.getElementById('root')
);
