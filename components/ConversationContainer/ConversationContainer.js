import { request } from "../../api.js";
import { getCookie } from "../../src/cookies.js";
import { div, import_link } from "../../src/html.js";
import Message from "../message/message.js";

import_link('./components/ConversationContainer/conversationcontainer.css');
async function getMoi() {
  let resp = await request('POST', '/user/whoami', {token: getCookie("token")});
  return resp[0];
}
export default async function ConversationContainer(props) {
  let content = [];
  let moi = await getMoi();
  props.forEach(m => {
    let who = (m.User == moi.UserID) ? 'moi' : '';
    m.who = who;
    content.push(Message(m));
  });
  return(
    div({
      id: 'ConversationContainer',
      class: 'conversationcontainer-principal',
      content: content
    })
  )
}