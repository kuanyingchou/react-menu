import React, { Component } from 'react';
import Menu from './menu';
import Button from './button';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      highlighted: false,
      expand: false,
      width: 0,
      height: 0,
    };
  }
  
  handleClick(e) {
    e.stopPropagation();
    let { url, expandOnHover } = this.props;
    if(url) {
      window.location.href = url; //TODO: SPA?
    }
    if(!expandOnHover) {
      this.setState({
        expand: !this.state.expand
      });  
    }
  } 
  handleMouseEnter() {
    this.setActive.bind(this)(true);
  }
  handleMouseLeave() {
    this.setActive.bind(this)(false);
  }
  setActive(active) {
    let { expandOnHover } = this.props;
    let newState = { highlighted: active };
    if(expandOnHover) {
      Object.assign(newState, { expand: active });
    }
    this.setState(newState);
  }

  getStyle(highlighted, layout) {
    return {
      position: 'relative',
      //width: ITEM_WIDTH + UNIT,
      //height: ITEM_HEIGHT+ UNIT,

      //fontWeight: highlighted ? 'bold' : 'normal',
      //lineHeight: '3em',
      cursor: 'pointer',
      display: layout === 'horizontal' ? 'inline-block' : 'block',
      boxSizing: 'border-box',
      verticalAlign: 'top',
      //textAlign: 'left',
      //margin: '1em',
      //padding: '1em',
      whiteSpace: 'nowrap',
      // paddingLeft: '1em',
      // paddingRight: '1em',
      // paddingTop: '0.5em',
      // paddingBottom: '0.5em',
      // borderStyle: 'solid',
      // borderColor: 'black',
      // borderWidth: 1,
    };
  }

  componentDidMount() {
    let dom = this.refs.item;
    this.setState({width: dom.offsetWidth, height: dom.offsetHeight});
  }

  render() {
    let { name, url, submenu, level, order, layout, icon } = 
        this.props;
    let { highlighted, expand, width, height } = this.state;
    return (
      <div 
          style={ this.getStyle(highlighted, layout) } 
          onClick={ this.handleClick.bind(this) }
          onMouseEnter={ this.handleMouseEnter.bind(this) }
          onMouseLeave={ this.handleMouseLeave.bind(this) }
          ref={"item"}
          >
        
        { 
          (expand && submenu)? 
          <Menu 
              config={submenu} 
              level={level+1} 
              parentWidth={ width }
              parentHeight={ height }
          /> : 
          '' 
        }

        <Button text={name} highlighted={highlighted} />
      </div>
    );
  }
}

MenuItem.defaultProps = {
  name: '',
  url: '',
  submenu: null,
  level: 0,
  expandOnHover: true,
  layout: 'vertical',
}



export default MenuItem;
