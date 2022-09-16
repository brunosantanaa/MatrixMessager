import html_js, { import_link } from './src/html.js';

import_link('./static/styles.css');

import Login from './pages/Login/Login.js';
import Inscription from './pages/Inscription/Insciption.js';
import Principal from './pages/Principal/Principal.js';


//import './socket.js';

var app = [Login()];

html_js('root', app);