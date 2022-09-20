import html_js, { button, div, gotoPage, import_link, input, updateElement } from "../../src/html.js";

import Logo from "../../components/Logo/Logo.js";
import { request } from "../../api.js";
import Login from "../Login/Login.js";
import PopUpMsg from "../../components/PopUpMsg/PopUpMsg.js";

import_link('./pages/Inscription/inscription.css');

let valid = false;

function class_not_valid(elementID, is_valid) {
  let element = document.getElementById(elementID);
  let classEl = '';
  if (element.class != undefined && element.class != '') classEl = element.class
  if(!is_valid) {
    classEl += ' not_valid';
  } else {
    classEl = classEl.replace(' not_valid', '');
  }
  updateElement(elementID, {attribute: 'class', value: classEl})
}

function validation(element) {
  let el = document.getElementById(element);
  
  switch (element) {

    case 'inscription_courriel':
      valid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(el.value));
      if (el.value == document.getElementById('inscription_conf_courriel').value) {
        class_not_valid('inscription_conf_courriel', true);
      }
      
      break;
    case 'inscription_conf_courriel':
      valid = (el.value == document.getElementById('inscription_courriel').value);
      break;
    case 'inscription_conf_password':
      valid = (el.value == document.getElementById('inscription_password').value);
      break;
    default:
      valid = !(el.value.trim().length === 0);
      break;
  }
  class_not_valid(element, valid);
  if (
    valid && (
    document.getElementById('inscription_courriel').value.trim().length === 0 ||
    document.getElementById('inscription_conf_courriel').value.trim().length === 0 ||  
    document.getElementById('inscription_password').value.trim().length === 0 ||  
    document.getElementById('inscription_conf_password').value.trim().length === 0 ||  
    document.getElementById('inscription_nom').value.trim().length === 0)
  ) valid = false;

  updateElement('inscription_submit', {attribute: 'disabled', value: !valid});
}

async function cadastre(value){
  let req = {}
  req.email = document.getElementById('inscription_courriel').value;
  req.conf_email = document.getElementById('inscription_conf_courriel').value;
  req.password = document.getElementById('inscription_password').value;
  req.conf_password = document.getElementById('inscription_conf_password').value;
  req.name = document.getElementById('inscription_nom').value;
  var result = await request('POST', '/user/cadastre', req);  
  console.log(result);
  if(result.error == undefined || result.error == "" ) {
    gotoPage('root', Login());
  } else {
    html_js('PopUpMsg', [PopUpMsg({visible: true, message: result.error})]);
  }
  
}
function goHome(){
  gotoPage('root', Login());
}
export default function Inscription(){
  return(div({class: 'inscription-content', content: [
    PopUpMsg({visible: false}),
    div({class: 'bt-return', content: '<i class="fa fa-arrow-left"></i>', onclick: goHome}),
    Logo({width: '150px'}),
    div({class: 'inscription-container', content: [
      input({id: 'inscription_nom', placeholder: 'Nom', type: 'text', onkeyup: {f: validation, a: 'inscription_nom'}}),
      input({id: 'inscription_courriel', placeholder: 'Courriel', type: 'text', onkeyup: {f: validation, a: 'inscription_courriel'}}),
      input({id: 'inscription_conf_courriel', placeholder: 'Confirmer le courriel', type: 'text', onkeyup: {f: validation, a: 'inscription_conf_courriel'}}),
      input({id: 'inscription_password', placeholder: 'Mot de passe', type: 'password', onkeyup: {f: validation, a: 'inscription_password'}}),
      input({id: 'inscription_conf_password', placeholder: 'Confirmer le Mot de passe', type: 'password', onkeyup: {f: validation, a: 'inscription_conf_password'}}),
      button({id: 'inscription_submit', content: 'Subit', disabled: true, onclick: {
        f: cadastre, 
        a: {
        nom: 'inscription_nom',
        email: 'inscription_courriel'
      }}})
    ]})
  ]}))
}