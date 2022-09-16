import { div, img, import_link } from "../../src/html.js";

import_link('./components/ListChats/listchats.css');

export default function ListChats(props) {
  let msg = props.messages.at(-1).Content;
  return(
    div({
      class: 'listchats-container',
      content: [
        img({class: 'en-parlant-headerimg', src: (typeof props.img === "undefined" ? './static/img/profil.png' : props.img)}),
        div({class: 'listchats-content', content: [
          div({class: 'listchats-title', content: props.title}),
          div({class: 'listchats-msg', content: msg}),
        ]})
      ]
    })
  )
}