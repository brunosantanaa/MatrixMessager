const attribut_type = {
  content: "",
  name: "",
  id: "",
  class: "",
  placeholder: "",
  value: "",
  checked: false,
  type: "",
  options: [],
  itens: [],
  src: "",
  alt: "",
  disabled: false,
  onclick: {f: undefined, a: undefined},
  orderly: false,
  onkeyup: "",
  style : ""
}

export default function html_js(element, content) {
  let el = document.getElementById(element);
  Array.from(content).forEach(c => {
    c.id = count_elements(el.children);
    el.appendChild(c);
  })
}
function count_elements(v) {
  let ini = v[0];
  let cnt = -1;
  Array.from(v).forEach(e => {
    if(ini.name == e.name) {
      cnt++;
    }
  });
  return (cnt < 0) ? 0 : cnt;
}
export function createComponent(element, attr = attribut_type) {
  var el = document.createElement(element);
  if (attr.name != undefined) {
    el.setAttribute('name', attr.name);
  }
  if (attr.id != undefined) {
    el.id = attr.id;
  }
  
  el.setAttribute('class', attr.class);
  if (element == 'input') {
    el.setAttribute('placeholder', attr.placeholder);
    el.setAttribute('type', attr.type);
  }else if(element == 'img') {
    el.setAttribute('alt', attr.alt);
  }
  el.checked = attr.checked;
  el.disabled = attr.disabled;
  if(attr.onclick != undefined && attr.onclick != "") {
    el.addEventListener('click', (e)=>{
      if(attr.onclick.f != undefined)
        (attr.onclick.f)(attr.onclick.a)
      else (attr.onclick)();
    });
  }
  if(attr.src!="") el.src = attr.src;
  if(attr.style != "") el.setAttribute('style', attr.style);
  if (Array.isArray(attr.content)) {
    Array.from(attr.content).forEach(e => {
      el.appendChild(e);
    })
  }else {
    el.innerHTML = (attr.content == undefined) ? "" : attr.content;
  }
  return el;
}

export function import_link(path) {
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = path;
  link.media = 'all';
  head.appendChild(link);
}

export function add_script(content, path='') {
  var script  = document.createElement('script');
  script.setAttribute('type', 'module');
  script.innerHTML = content;
  if(path!='') script.setAttribute('src', path);
  document.head.appendChild(script);
}
export function div(value = attribut_type) { return createComponent('div', value);}

export function h1(value = attribut_type) { return createComponent('h1', value);}
export function h2(value = attribut_type) { return createComponent('h2', value);}
export function h3(value = attribut_type) { return createComponent('h3', value);}
export function h4(value = attribut_type) { return createComponent('h4', value);}
export function h5(value = attribut_type) { return createComponent('h5', value);}

export function p(value = attribut_type) { return createComponent('p', value);}

export function input(value=attribut_type) { return createComponent('input', value);}
export function button(value=attribut_type) { return createComponent('button', value);}
export function img(value=attribut_type) { return createComponent('img', value);}

export function list(value=attribut_type) {
  var li = (value.orderly) ? "ol" : "ul";
  
  li = createComponent(li, value);
  for(var i=0; i < value.itens.length; i++) {
    let itens = createComponent('li', value.itens[i]);
    li.appendChild(itens);
  }
  return li;
}
export function select(value=attribut_type) {
  let sel = createComponent('select', value);
  
  for(var i=0; i < value.options.length; i++) {
    let opt = createComponent('option', value.options[i]);
    sel.appendChild(opt);
  }
  return sel;
}