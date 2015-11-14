const ITEM_WIDTH = 15;
const ITEM_HEIGHT = 3;
const UNIT = /* 'px'; */ 'em';

const colors = ['#D8CAA8', '#5C832F', '#284907', '#382513', '#363942'];

export const menuStyle = (level, direction) => {
  let style = {
    fontFamily: 'monospace',
    position: level==0?'relative':'absolute',
    //marginLeft: level==0?'0px':'100%',
    //marginTop: '0%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    //margin: 5,
    display: 'inline-block',
  }
  switch(direction) {
  case 'DOWN':
    Object.assign(style, {
      top: level>0 ? ITEM_HEIGHT + UNIT : 0,
      left: 0,
    });
    break;
  default: //RIGHT
    Object.assign(style, {
      top: 0,
      left: level>0 ? ITEM_WIDTH+UNIT : '0'+UNIT,
    });
    break;
  }

  return style;
};

export const menuItemStyle = (highlighted) => ({
  //color: highlighted?'red':'blue',
  position: 'relative',
  width: ITEM_WIDTH + UNIT,
  height: ITEM_HEIGHT+ UNIT,

  color: highlighted ? 'white' : 'black',
  textAlign: 'center',

  background: highlighted ? 'grey' : '',
  //fontWeight: highlighted ? 'bold' : 'normal',
  lineHeight: ITEM_HEIGHT+UNIT,
  cursor: 'pointer',
  //display: 'block',
  display: 'inline-block',
  //padding: 1,
  // borderStyle: 'solid',
  // borderColor: 'black',
  // borderWidth: 1 + UNIT,
});

