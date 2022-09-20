export default function dateFormat(date) {
  date = new Date(date.replace(' ', 'T') + 'Z');
  date = date.toString().split(' ')[4];
  return date.slice(0, date.length - 3).replace(':','h');
}