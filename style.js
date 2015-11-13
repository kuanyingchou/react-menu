const ITEM_WIDTH = 150;
const ITEM_HEIGHT = 50;
const UNIT = 'px'; //'em';

const colors = ['#FCFFF5', '#D1DBBD', '#91AA9D', '#3E606F', '#193441'];

export const menuStyle = (level) => ({
  fontFamily: 'monospace',
  position: level==0?'relative':'absolute',
  //marginLeft: level==0?'0px':'100%',
  //marginTop: '0%',
  top: 0,//level>0?-ITEM_HEIGHT/2+ UNIT :'0'+UNIT,
  left: level>0 ? ITEM_WIDTH+UNIT : '0'+UNIT,
  // borderStyle: 'solid',
  // borderColor: 'black',
  // borderWidth: 5 + UNIT,
  //margin: 5,
});

export const menuItemStyle = (highlighted) => ({
  //color: highlighted?'red':'blue',
  position: 'relative',
  width: ITEM_WIDTH + UNIT,
  height: ITEM_HEIGHT+ UNIT,
  background: highlighted ? colors[1] : colors[2],
  lineHeight: ITEM_HEIGHT+UNIT,
  cursor: 'pointer',
  // borderStyle: 'solid',
  // borderColor: 'black',
  // borderWidth: 1 + UNIT,
});

