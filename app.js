import { render } from 'react-dom';
import React from 'react';
import Menu from './menu';
import { Direction } from './constants';

let abouts = [
  { name: 'Me', url: 't1.html' },
  { name: 'Site', url: 't2.html', submenu: [{name: 'Hi'}, {name: 'Let\'s Go'}] },
];

let articles = [
  { name: 'iPad Pro', url: 'a1.html' },
  { name: 'iPhone', url: 'a2.html', submenu: abouts},
  { name: 'Macbook Pro', url: 'a3.html', submenu: abouts},
];

let items = [
  { name: 'Home', url:'home.html', },
  { name: 'Articles', url:'articles.html', submenu: articles, direction: 'down' },
  { name: 'About', url:'about.html', submenu: abouts, direction: 'down' },
];

render(
  <Menu items={ items } />,
  document.getElementById('root')
);
