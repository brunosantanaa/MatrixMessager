import { div, import_link } from "../../src/html.js";
import Message from "../message/message.js";

import_link('./components/ConversationContainer/conversationcontainer.css');
function getUser(user) {
  let resp = "";
  if(user === "moi") {
    //request with token
    resp = {UserID: 1, Name: "Bruno"};
  } else {
    //request with UserID
    resp = {UserID: 2, Name: "Teste"};
  }
  return resp;
}
export default function ConversationContainer(props) {
  let content = [];
  let moi = getUser('moi');
  props.forEach(m => {
    let who = (m.User == moi.UserID) ? 'moi' : '';
    m.who = who;
    m.User = getUser(m.User);
    content.push(Message(m))
  });
  return(
    div({
      class: 'conversationcontainer-principal',
      content: content
    })
  )
}