import html_js, { import_link } from './src/html.js';

import_link('./static/styles.css');

import Principal from './pages/Principal/Principal.js';
import { getCookie } from './src/cookies.js';


//import './socket.js';

var app = [ await Principal({token: getCookie("token")})];

html_js('root', app);