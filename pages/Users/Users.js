import { div, gotoPage, h1, import_link } from "../../src/html.js";
import { request } from "../../api.js";
import { getCookie } from '../../src/cookies.js';

import Principal from "../Principal/Principal.js";

import_link('./pages/Users/users.css');

async function close(){
  gotoPage('root', await Principal({token: getCookie("token")}));
}
async function getUsers(token) {
  var users = await request('POST', '/user/users', token);
  if(users.access == undefined) {
    return users;
  } else {
    gotoPage('root', Login());
  }
}
export default async function Users(props) {
  let users = []
  users = await getUsers(props);
  let content = [
    div({class: 'users-bt-close', content: '<i class="fa fa-times"></i>', onclick: close}),
    h1({content: "Liste d'Utilisateurs"})
  ];
  users.forEach(u => {
    content.push(
      div({class: 'users-element-list', content: [
        div({class: 'users-element-name', content: u.name}),
        div({class: 'users-element-email', content: u.email}),
      ]})
    )
  });
  return(div({class: 'users-container', content: content}));
}