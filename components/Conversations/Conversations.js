import { request } from '../../api.js';
import Login from '../../pages/Login/Login.js';
import Users from '../../pages/Users/Users.js';
import { delCookie, getCookie } from '../../src/cookies.js';
import { div, gotoPage, img, import_link } from '../../src/html.js';
import ListChats from '../ListChats/ListChats.js';

import_link('./components/Conversations/Conversations.css');
async function exit(){
  let teste = {token: getCookie("token")};
  console.log(teste);
  var resp = await request('POST', '/user/logout', teste);
  if (resp.logout != undefined) {
    delCookie("token");
    gotoPage('root', Login());
  }  
}
function usersList() {
  gotoPage('root', Users({token: getCookie("token")}));
}
export default function Conversations(props) {
  let profil = (typeof props.profile === "undefined") ? './static/img/profil.png' : props.profile;
  let content = [
    div({class: 'conversations-header', content: [
      div({class: 'container-img', content: [
        img({class: 'conversations-profile-picture', src: profil})
      ]}),
      div({class: 'conversations-bt conversations-users-list', content: '<i class="fa fa-users"></i>', onclick: usersList}),
      div({class: 'conversations-bt conversations-user-logout', content: '<i class="fa fa-sign-out"></i>', onclick: exit}),
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