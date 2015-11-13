import { render } from 'react-dom';
import React from 'react';
import Menu from './menu';

let abouts = [
  { name: 'Me', url: 't1.html' },
  { name: 'Site', url: 't2.html' },
];

let articles = [
  { name: 'iPad Pro', url: 'a1.html' },
  { name: 'iPhone', url: 'a2.html', submenu: abouts},
  { name: 'Macbook Pro', url: 'a3.html', submenu: abouts},
];

let items = [
  { name: 'Home', url:'home.html' },
  { name: 'Articles', url:'articles.html', submenu: articles },
  { name: 'About', url:'about.html', submenu: abouts },
];

render(
  <Menu items={ items } />,
  document.getElementById('root')
);
