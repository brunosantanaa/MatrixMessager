const options_type = {

}
const attribut_type = {
  content: "",
  name: "",
  id: "",
  class: "",
  place_holder: "",
  value: "",
  checked: false,
  type: "",
  options: [],
  src: "",
  alt: "",
  disabled: false,
  style: "",
  on_click: "",
  orderly: false
}

function reduce_html(arr) {
  if (Array.isArray(arr)) {
    var ret="";
    for(var i=0; i < arr.length; i++) {
      ret += (Array.isArray(arr[i])) ? arr[i].join('') : arr[i];
    }
    return ret;
  } else {
    return arr;
  }
}
export function html_js(element, content) {
  content = reduce_html(content);
  document.getElementById(element).innerHTML = content;
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

export function div(value = attribut_type) {
  return "<div class='" +value.class+ "' id='" +value.id+ "'>" + reduce_html(value.content) + "</div>";
}
export function h1(value = attribut_type) {
  return "<h1 class='" +value.class+ "' id='" +value.id+ "'>" + reduce_html(value.content) + "</h1>";
}
export function h2(value = attribut_type) {
  return "<h2 class='" +value.class+ "' id='" +value.id+ "'>" + reduce_html(value.content) + "</h2>";
}
export function h3(value = attribut_type) {
  return "<h3 class='" +value.class+ "' id='" +value.id+ "'>" + reduce_html(value.content) + "</h3>";
}
export function h4(value = attribut_type) {
  return "<h4 class='" +value.class+ "' id='" +value.id+ "'>" + reduce_html(value.content) + "</h4>";
}
export function h5(value = attribut_type) {
  return "<h5 class='" +value.class+ "' id='" +value.id+ "'>" + reduce_html(value.content) + "</h5>";
}
export function p(value = attribut_type) {
  return "<p class='" +value.class+ "' id='" +value.id+ "'>" + reduce_html(value.content) + "</p>";
}
export function select(value=attribut_type) {
  var sel = "<select name=\""+value.name+"\" id=\""+value.id+"\">";
  for(var i=0; i < value.options.length; i++) {
    sel += "<option value=\""+value.options[i].value+"\">" +value.options[i].content+ "</option>";
  }
  sel += "</select>"
  return sel;
}
export function input(value=attribut_type) {
  return ("<input type=\""+value.type+
  ((value.value != undefined) ? "\" value=\""+value.value : "")  
  +"\" placeholder=\""+value.place_holder+
  "\" name=\""+value.name+
  "\" alt=\""+value.alt+
  "\" src=\""+value.src+
  "\" id=\""+value.id+
  "\" class=\""+value.class+
  "\" "+
  ((value.checked) ? " checked " : "") +
  ((value.disabled) ? " disabled " : "") +
  "/>")
}
export function button(value=attribut_type) {
  return (
    "<button "+
    "name=\""+value.name+
    "\" id=\""+value.id+
    "\" class=\""+value.class+
    "\" placeholder=\""+value.place_holder+
    "\" onclick=\""+value.on_click+
    "\" "+
    ((value.checked) ? " checked " : "") +
    ((value.disabled) ? " disabled " : "") +
    "\">"+
    value.content+
    "</button>"
  );
}
export function list(value=attribut_type) {
  var li = (value.orderly) ? "<ol " : "<ul ";
  li += "name=\""+value.name+"\" ";
  li += "id=\""+value.id+"\" ";
  li += "class=\""+value.class+"\" ";
  li += ((value.checked) ? " checked " : "") + ((value.disabled) ? " disabled " : "") + " >";
  for(var i=0; i < value.options.length; i++) {
    li += "<li name=\"" + value.options[i].name + "\"";
    li +=  "id=\""+value.options[i].id+"\" class=\""+value.options[i].class+"\"";
    li += " >";
    li += value.options[i].content;
    li += "</li>";
  }
  li +=  (value.orderly) ? "</ol>" : "</ul>";

  return li;
}
