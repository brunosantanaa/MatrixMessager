import { img } from '../../src/html.js';

export default function Logo(props) {
  return (
    img({src: './static/img/logo.png', style: 'width: '+props.width+';'})
  )
}