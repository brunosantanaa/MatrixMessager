import dateFormat from "../../src/dateFormat.js";
import { div, img, import_link } from "../../src/html.js";

import_link('./components/ListChats/listchats.css');

export default function ListChats(props) {
  let msg = props.messages.at(-1).Content;
  let dt = dateFormat(props.messages.at(-1).Date);
  
  return(
    div({
      class: 'listchats-container',
      content: [
        img({class: 'en-parlant-headerimg', src: (typeof props.img === "undefined" ? './static/img/profil.png' : props.img)}),
        div({class: 'listchats-content', content: [
          div({class: 'listchats-title', content: props.title}),
          div({class: 'listchats-msgs', content: [
            div({class: 'listchats-msg', content: msg}),
            div({class: 'listchats-hour', content: dt}),
          ]})
        ]})
      ]
    })
  )
}