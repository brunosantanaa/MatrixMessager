export default function dateFormat(date) {
  date = date.split(' ')[1];
  return date.slice(0, date.length - 3);
}