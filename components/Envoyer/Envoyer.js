import { div, input, button, import_link } from "../../src/html.js";

import_link('./components/Envoyer/Envoyer.css');

export default function Envoyer() {
  return(
    div({
      class: 'envoyer-container',
      content: [
        input({type: 'text', class: 'envoyer-input', placeholder: 'Message'}),
        button({class: 'envoyer-button', content: '<i class="fa fa-paper-plane"></i>'})
      ]
    })
  )  
}