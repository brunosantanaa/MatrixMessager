import Login from '../../pages/Login/Login.js';
import { delCookie } from '../../src/cookies.js';
import { div, gotoPage, img, import_link } from '../../src/html.js';
import ListChats from '../ListChats/ListChats.js';

import_link('./components/Conversations/Conversations.css');
function exit(){
  delCookie("token");
  gotoPage('root', Login());
}
export default function Conversations(props) {
  let profil = (typeof props.profile === "undefined") ? './static/img/profil.png' : props.profile;
  let content = [
    div({class: 'conversations-header', content: [
      img({class: 'conversations-profile-picture', src: profil}),
      div({class: 'conversations-user-logout', content: '<i class="fa fa-sign-out"></i>', onclick: exit}),
    ]})];
  props.conversations.forEach(e => {
    content.push(ListChats(e));
  });
  return(
    div({
      class: 'conversations-container',
      content: content
    })
  )
}