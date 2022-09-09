import { div, input, import_link, p, button } from '../../src/html.js';

import_link('./pages/Login/login.css');

import Logo from '../../components/Logo/Logo.js';
import { request } from "../../api.js";

async function login_action(){
  var email = document.getElementById('login').value;
  var password = document.getElementById('password').value;
  var resp = await request('POST', '/login/', {email: email, password: password});
  
  if(resp.access) {
    
    document.getElementById('msg-validation-login').innerHTML = 'Liberado';
  } else {
    document.getElementById('msg-validation-login').innerHTML = '';
  }
}

export default function Login(props) {
  return (
    div({
      name: 'Login',
      class: 'container-login',
      content: [
        Logo({width: '150px'}),
        input({type: 'text', placeholder:'Courriel', class: 'input-login'}),
        input({type: 'password', placeholder:'Mot de Passe', class: 'input-login'}),
        p({content: '', class: 'msg-validation-login'}),
        button({content: 'Entrer', class: 'button-login', onclick: login_action}),
      ]
    })
  );
}
