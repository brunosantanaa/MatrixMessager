import { div, input, import_link, p, button, gotoPage } from '../../src/html.js';

import_link('./pages/Login/login.css');

import Logo from '../../components/Logo/Logo.js';
import { request } from "../../api.js";
import Principal from '../Principal/Principal.js';
import Inscription from '../Inscription/Insciption.js';

async function loginAction(){
  var email = document.getElementById('login').value;
  var password = document.getElementById('password').value;
  var resp = await request('POST', '/login', {email: email, password: password});
  if(resp.token) {
    gotoPage('root', await Principal(resp));
  }
}
function inscriptionAction() {
  gotoPage('root', Inscription());
}
export default function Login(props) {
  return (
    div({
      name: 'Login',
      class: 'container-login',
      content: [
        Logo({width: '150px'}),
        input({type: 'text', placeholder:'Courriel', class: 'input-login', id: 'login'}),
        input({type: 'password', placeholder:'Mot de Passe', class: 'input-login', id: 'password'}),
        p({content: '', class: 'msg-validation-login'}),
        div({class: 'login-bts-container', content: [
          div({class: 'login-bt-cadastre', content: "S'inscrire", onclick: inscriptionAction}),
          button({content: 'Entrer', class: 'button-login', onclick: loginAction})
        ]})
        
      ]
    })
  );
}
