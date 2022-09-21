import html_js, { div, input, import_link, p, button, gotoPage, updateElement } from '../../src/html.js';

import_link('./pages/Login/login.css');

import Logo from '../../components/Logo/Logo.js';
import { request } from "../../api.js";
import Principal from '../Principal/Principal.js';
import Inscription from '../Inscription/Insciption.js';
import { setCookie } from '../../src/cookies.js';
import PopUpMsg from '../../components/PopUpMsg/PopUpMsg.js';

async function loginAction(){
  var email = document.getElementById('login').value;
  var password = document.getElementById('password').value;
  var resp = await request('POST', '/user/login', {email: email, password: password});
  if(resp.token) {
    setCookie("token", resp.token, 1);
    gotoPage('root', await Principal(resp));
  }else {
    html_js('PopUpMsg', [PopUpMsg({visible: true, message: resp.error})]);
  }
}
function inscriptionAction() {
  gotoPage('root', Inscription());
}
let valid = false;
function validation(v){
  let elementID = v.value;
  if(v.event.key == 'Enter') {
    loginAction();
    valid = false;
  }
  let el = document.getElementById(elementID);
  switch (elementID) {
    case 'password':
      valid = el.value.trim().length > 2;
      break;
    case 'login':
      valid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(el.value));
      break;
    default:
      valid = !(el.value.trim().length === 0);
      break;
  }
  if (
    valid && (
      document.getElementById('login').value.trim().length === 0 ||
      document.getElementById('password').value.trim().length === 0)
  ) valid = false;
  updateElement('login-bt-login', {attribute: 'disabled', value: !valid}); 
}
export default function Login(props) {
  return (
    div({
      name: 'Login',
      class: 'container-login',
      content: [
        PopUpMsg({visible: false}),
        Logo({width: '150px'}),
        input({type: 'text', placeholder:'Courriel', class: 'input-login', id: 'login', onkeyup: {f: validation, a: 'login'}}),
        input({type: 'password', placeholder:'Mot de Passe', class: 'input-login', id: 'password', onkeyup: {f: validation, a: 'password'}}),
        p({content: '', class: 'msg-validation-login'}),
        div({class: 'login-bts-container', content: [
          div({class: 'login-bt-cadastre', content: "S'inscrire", onclick: inscriptionAction}),
          button({id: 'login-bt-login', content: 'Entrer', class: 'button-login', onclick: loginAction, disabled: !valid})
        ]})
        
      ]
    })
  );
}