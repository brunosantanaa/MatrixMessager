import { generate } from './html.js';
import FirstComponent from './component.js';

var app = [
  FirstComponent,
  FirstComponent,
  FirstComponent,
  FirstComponent,
]

document.getElementById("root").innerHTML = generate(app);

