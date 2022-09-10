import { div, p, h4, import_link } from '../../src/html.js';

import_link('./components/message/message.css');

export default function Message(props){
  return (
    div({
      class: 'message-container message-'+(props.who != 'moi'? 'general' : 'moi'),
      content: [
        div({class: 'message-info', content: [
          p({class: 'message-name', content: props.name}),
          p({class: 'message-time', content: props.time})
        ]}),
        p({class: 'message-content', content: props.message}),
        
      ]
    })
  )
}