import React, { Component } from 'react';
import { render } from 'react-dom';

class MenuItem extends Component {
  constructor(props = {
      name: '',
      url: '',
      submenu: null,
  }) {
    super(props);
    this.state = { 
      highlighted: false,
      expand: false,
    };
  }
  
  handleClick(e) {
    e.stopPropagation(); //!
    let { expand } = this.state;
    let { submenu, name } = this.props;
    //console.log(`click ${name}`);
    this.setState({ expand: !expand });
    if(!submenu) {
      let { url } = this.props;
      window.location.href = url; //TODO: SPA?
    }
  }
  handleMouseEnter() {
    this.setState({highlighted: true});
  }
  handleMouseLeave() {
    this.setState({highlighted: false});
  }
  render() {
    let { name, url, submenu, level } = this.props;
    let { highlighted, expand } = this.state;
    let style = {
      color: highlighted?'red':'blue',
      cursor: 'pointer',
    };
    let icon;
    if(submenu) {
      icon = expand?'-':'+';
    } else {
      icon = '├'; //'|';
    }
    return (
      <div 
          style={ style } 
          onClick={ this.handleClick.bind(this) }
          onMouseEnter={ this.handleMouseEnter.bind(this) }
          onMouseLeave={ this.handleMouseLeave.bind(this) }
          >
        { '|'.repeat(level) }
        { icon } 
        { ' ' } 
        { name }
        { (expand && submenu)? <Menu items={submenu} level={level+1}/> : ''}
      </div>
    );
  }
}
class Menu extends Component {
  render() {
    let { items, level } = this.props;
    let style = {
      fontFamily: 'monospace',
      //borderStyle: 'solid',
      //borderColor: 'black',
      //borderWidth: 1,
      //margin: 5,
    };
    let menuItems = items.map(
      (item) => {
        return (
          <MenuItem 
            key={item.name} 
            name={item.name} 
            url={item.url} 
            submenu={item.submenu}
            level={level}
          />
        );
      }
    );

    return (
      <div style={style}>
        { menuItems }
      </div>
    );
  }
}

let abouts = [
  { name: 'Me', url: 't1.html' },
  { name: 'Site', url: 't2.html' },
];

let articles = [
  { name: 'iPad Pro', url: 'a1.html' },
  { name: 'iPhone', url: 'a2.html' },
  { name: 'Macbook Pro', url: 'a3.html', submenu: abouts},
];

let items = [
  { name: 'Home', url:'home.html' },
  { name: 'Articles', url:'articles.html', submenu: articles },
  { name: 'About', url:'about.html', submenu: abouts },
];

render(
  <Menu items={ items } level={ 0 } />,
  document.getElementById('root')
);
