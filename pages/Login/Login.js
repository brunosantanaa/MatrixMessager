import { div, input, import_link, p, button, gotoPage } from '../../src/html.js';

import_link('./pages/Login/login.css');

import Logo from '../../components/Logo/Logo.js';
import { request } from "../../api.js";
import Principal from '../Principal/Principal.js';

async function login_action(){
  var email = document.getElementById('login').value;
  var password = document.getElementById('password').value;
  var resp = await request('POST', '/login', {email: email, password: password});
  
  gotoPage('root', Principal());
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
        button({content: 'Entrer', class: 'button-login', onclick: login_action})
      ]
    })
  );
}
