import EnParlant from "../../components/EnParlant/enParlant.js";
import Conversations from "../../components/Conversations/Conversations.js";

import { div, import_link } from "../../src/html.js";

import_link('./pages/Principal/Principal.css');

export default function Principal(props) {
  return(
    div({
      class: 'principal-container', 
      content: [
        Conversations(),
        EnParlant({title: '/j Recife', activity: 'Dernier activite à 15h'}),  
      ]
    })
    
  )
}