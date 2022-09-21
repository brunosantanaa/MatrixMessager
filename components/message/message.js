import dateFormat from '../../src/dateFormat.js';
import { div, p, h4, import_link } from '../../src/html.js';

import_link('./components/message/message.css');

export default function Message(props){
  let rgbName=[];
  for(var i=0; i < 3; i++) {
    rgbName.push(props.name.charCodeAt(i));
  }
  rgbName[props.User % 3] = 255;
  return (
    div({
      class: 'message-container message-'+(props.who != 'moi'? 'general' : 'moi'),
      content: [
        div({class: 'message-info', content: [
          p({class: 'message-name', 
            style: (props.who != 'moi'? 'color: rgb('+rgbName[0]+','+rgbName[1]+','+rgbName[2]+') !important;' : ''), 
            content: (props.who != 'moi'? props.name : 'Vous')}),
          p({class: 'message-time', content: dateFormat(props.Date)})
        ]}),
        p({class: 'message-content', content: props.Content}),
        
      ]
    })
  )
}