import { request } from "../../api.js";
import { getCookie } from "../../src/cookies.js";
import { div, input, button, import_link, gotoPage } from "../../src/html.js";

import Principal from "../../pages/Principal/Principal.js";

import_link('./components/Envoyer/Envoyer.css');
async function send(){
  let inputText = document.getElementById('envoyer-message').value;
  var req = {token: getCookie("token"), message: inputText, ConversationID: 1};
  console.log(req);
  var resp = await request('POST', '/messages/send', req);
  console.log(resp);
  gotoPage('root', await Principal({token: getCookie("token")}));
}
export default function Envoyer() {
  return(
    div({
      class: 'envoyer-container',
      content: [
        input({id: 'envoyer-message', type: 'text', class: 'envoyer-input', placeholder: 'Taper un Message'}),
        button({class: 'envoyer-button', content: '<i class="fa fa-paper-plane"></i>', onclick: send})
      ]
    })
  )  
}