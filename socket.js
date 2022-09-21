import html_js, { gotoPage } from "./src/html.js";
import { request } from "./api.js";

import ConversationContainer from "./components/ConversationContainer/ConversationContainer.js";
import Login from "./pages/Login/Login.js";
import { getCookie } from "./src/cookies.js";

export default async function verifyMsg(){  
  let convs = await request('POST', '/conversations', {token: getCookie("token")});
  while(true){
    let conversations = await request('POST', '/conversations', {token: getCookie("token")});
    if(conversations[0].messages.length != convs[0].messages.length){
      if (conversations.access == undefined) {
        html_js('ConversationContainer', [await ConversationContainer(conversations[0].messages)]);
        convs = await request('POST', '/conversations', {token: getCookie("token")});
      } else {
        gotoPage('root',Login());
        break;
      }
    }
  }
}
