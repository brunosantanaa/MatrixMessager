import { div, import_link, p } from '../../src/html.js';
import_link('./components/GeralHeader/general_header.css');

export default function GeralHeader(props) {
  return(
    div({
      name: 'GeralHeader',
      class: 'general-header',
      content: [
        p({content: 'Teste'})
      ]
    })
  )
}