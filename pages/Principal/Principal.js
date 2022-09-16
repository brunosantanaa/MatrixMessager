import EnParlant from "../../components/EnParlant/enParlant.js";
import Conversations from "../../components/Conversations/Conversations.js";

import { div, import_link } from "../../src/html.js";

import_link('./pages/Principal/Principal.css');

let ex_content_Conversations = {
  conversations: [
    {title: 'Geral', messages: [{User: 1, Content: 'Estou indo!'}, {User: 2, Content: 'Fica ai'}]},
    {title: 'Geral2', messages: [{User: 1, Content: 'Estou indo!'}]}]
};

export default function Principal(props) {
  return(
    div({
      class: 'principal-container', 
      content: [
        Conversations(ex_content_Conversations),
        EnParlant({title: '/j Recife', activity: 'Dernier activite à 15h'}),  
      ]
    })
    
  )
}