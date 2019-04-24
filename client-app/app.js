const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use('/', express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use('/', routes);
module.exports = app;
