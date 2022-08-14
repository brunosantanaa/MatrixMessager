export function h1(content, c_style="", id="") {
  return "<h1 class='" +c_style+ "' id='" +id+ "'>" + content + "</h1>";
}
export function p(content, c_style="", id="") {
  return "<p class='" +c_style+ "' id='" +id+ "'>" + content + "</p>";
}
export function generate(arr) {
  const reducer = (accumulator, curr) => accumulator + curr;
  return arr.reduce(reducer);
}