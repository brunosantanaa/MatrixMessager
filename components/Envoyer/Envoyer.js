import { request } from "../../api.js";
import { getCookie } from "../../src/cookies.js";
import html_js, { div, input, button, import_link, gotoPage } from "../../src/html.js";

import Principal from "../../pages/Principal/Principal.js";
import PopUpMsg from "../PopUpMsg/PopUpMsg.js";

import_link('./components/Envoyer/Envoyer.css');
async function send(){
  let inputText = document.getElementById('envoyer-message').value;
  var req = {token: getCookie("token"), message: inputText, ConversationID: 1};
  var resp = await request('POST', '/messages/send', req);
  if (resp.error == undefined && resp.error == "") {
    gotoPage('root', await Principal({token: getCookie("token")}));
  } else {
    console.log(resp)
    html_js('PopUpMsg', [PopUpMsg({visible: true, message: resp.error})]);
  }
}
export default function Envoyer() {
  return(
    div({
      class: 'envoyer-container',
      content: [
        input({id: 'envoyer-message', type: 'text', class: 'envoyer-input', maxlength: 10,placeholder: 'Taper un Message'}),
        button({class: 'envoyer-button', content: '<i class="fa fa-paper-plane"></i>', onclick: send})
      ]
    })
  )  
}