import EnParlant from "../../components/EnParlant/enParlant.js";
import Conversations from "../../components/Conversations/Conversations.js";

import { div, gotoPage, import_link } from "../../src/html.js";
import { request } from "../../api.js";
import Login from "../Login/Login.js";
import PopUpMsg from "../../components/PopUpMsg/PopUpMsg.js";
import verifyMsg from "../../socket.js";

import_link('./pages/Principal/Principal.css');

async function validate(req) {
  var resp = await request('POST', '/conversations', req);
  if(resp.access == undefined) {
    return resp;
  } else {
    gotoPage('root',Login());
  }
}
export default async function Principal(props) {
  verifyMsg();
  let content = {};
  content.conversations = await validate(props);
  return(
    div({
      class: 'principal-container', 
      content: [
        PopUpMsg({visible: false}),
        Conversations(content),
        await EnParlant(content.conversations[0]),  
      ]
    })
    
  )
}