import { request } from "../../api.js";
import { getCookie } from "../../src/cookies.js";
import html_js, { div, input, button, import_link, gotoPage, updateElement } from "../../src/html.js";

import PopUpMsg from "../PopUpMsg/PopUpMsg.js";
import ConversationContainer from "../ConversationContainer/ConversationContainer.js";
import Login from "../../pages/Login/Login.js";

import_link('./components/Envoyer/Envoyer.css');
let valid = false;
function validation(v){
  let elementID = v.value;
  let el= document.getElementById(elementID).value
  valid = el.length <= 0;
  if(v.event.key == 'Enter') {
    send();
    valid = false;
  }
  updateElement(elementID, {attribute: 'disabled', value: !valid});
}
async function send(){
  let elInput = document.getElementById('envoyer-message')
  let inputText = elInput.value;
  var req = {token: getCookie("token"), message: inputText, ConversationID: 1};
  var resp = await request('POST', '/messages/send', req);
  if (resp.send == "OK") {
    let conversations = await request('POST', '/conversations', {token: getCookie("token")});
    if (conversations.access == undefined) {
      html_js('ConversationContainer', [await ConversationContainer(conversations[0].messages)]);
      elInput.value ='';
    } else {
      gotoPage('root',Login());
    }
  } else {
    html_js('PopUpMsg', [PopUpMsg({visible: true, message: resp.error})]);
  }
}
export default function Envoyer() {
  return(
    div({
      class: 'envoyer-container',
      content: [
        input({id: 'envoyer-message', type: 'text', class: 'envoyer-input', 
        maxlength: 150, placeholder: 'Taper un Message',
        onkeyup: {f: validation, a: 'envoyer-button'}}),
        button({
          id: 'envoyer-button',
          class: 'envoyer-button', content: '<i class="fa fa-paper-plane"></i>', 
          onclick: send, disabled: !valid})
      ]
    })
  )  
}