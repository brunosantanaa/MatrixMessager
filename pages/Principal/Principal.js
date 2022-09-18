import EnParlant from "../../components/EnParlant/enParlant.js";
import Conversations from "../../components/Conversations/Conversations.js";

import { div, gotoPage, import_link } from "../../src/html.js";
import { request } from "../../api.js";
import Login from "../Login/Login.js";

import_link('./pages/Principal/Principal.css');


//   conversations: [
//     {title: 'Geral', messages: [{User: 1, Content: 'Estou indo!'}, {User: 2, Content: 'Fica ai'}]},
//     {title: 'Geral2', messages: [{User: 1, Content: 'Estou indo!'}]}]
// };
async function validate(req) {
  var resp = await request('POST', '/conversations', req);
  if(resp.access == undefined) {
    console.log(resp);
    return resp;
  } else {
    gotoPage('root',Login());
  }
}
export default async function Principal(props) {
  let content = {};
  content.conversations = await validate(props);
  console.log(content);
  return(
    div({
      class: 'principal-container', 
      content: [
        Conversations(content),
        EnParlant({title: '/j Recife', activity: 'Dernier activite à 15h'}),  
      ]
    })
    
  )
}