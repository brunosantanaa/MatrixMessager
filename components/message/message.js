import { div, p, h4 } from '../../src/html.js';

export default function Message(props){
  return (
    div({
      class: 'message-container message-'+props.who,
      content: [
        h4({class: 'message-name', content: props.name}),
        p({class: 'message-content', content: props.message}),
        p({class: 'message-time', content: props.time})
      ]
    })
  )
}