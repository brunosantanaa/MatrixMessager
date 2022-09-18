import { div, img, h5, import_link, p } from '../../src/html.js';
import ConversationContainer from '../ConversationContainer/ConversationContainer.js';
import Envoyer from '../Envoyer/Envoyer.js';

import_link('./components/EnParlant/enParlant.css');

export default function EnParlant(props){
  let messages = props.messages;
  return(
    div({
      class: 'en-parlant-container',
      content: [
        div({class: 'en-parlant-header', content: [
          img({class: 'en-parlant-headerimg', src: (typeof props.img === "undefined" ? './static/img/profil.png' : props.img)}),
          div({class: 'en-parlant-headercontent', content: [
            h5({class: 'en-parlant-headercontenttitle', content: props.title}),
            p({content: props.activity})
          ]})
          
        ]}),
        ConversationContainer(messages),
        Envoyer()
      ]
    }));
}