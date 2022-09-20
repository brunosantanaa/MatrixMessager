import { div, import_link, updateElement } from "../../src/html.js";

import_link('./components/PopUpMsg/popupmsg.css');

function popupClose() {
  updateElement('PopUpMsg', {attribute: 'class', value: 'popupmsg-container'})
}

export default function PopUpMsg(props) {
  let msg = (props.message != undefined)? props.message : '';
  return(div({id: 'PopUpMsg', class: 'popupmsg-container'+((props.visible)?' visible':''), content: [
    div({class: 'popupmsg-content', content: [
      div({class: 'popupmsg-bt-close', content: '<i class="fa fa-times"></i>', onclick: popupClose}),
      div({class: 'popupmsg-msg', content: msg}),
    ]})
  ]}))
}