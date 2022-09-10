import { div, import_link } from "../../src/html.js";
import Message from "../message/message.js";

import_link('./components/ConversationContainer/conversationcontainer.css');

export default function ConversationContainer(props) {
  return(
    div({
      class: 'conversationcontainer-principal',
      content: [
        Message({name: 'Bruno', who: 'moi', message: 'vamo nessa carai, tas fazendo o q?', time: '10:20'}),
        Message({name: 'Paulo', who: '', message: 'Vou nada!', time: '10:20'}),
        Message({name: 'Mario', who: '', message: 'Vai fazer o projeto carai.', time: '10:20'})
      ]
    })
  )
}