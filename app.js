import html_js, { import_link } from './src/html.js';

import_link('./static/styles.css');

import Login from './pages/Login/Login.js';
import Principal from './pages/Principal/Principal.js';


//import './socket.js';
var app = [];

app.push(Principal());

html_js('root', app);