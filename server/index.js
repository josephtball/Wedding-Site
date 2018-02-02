// node packages
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 8080;

var app = express();

// morgan logger
app.use(logger('dev'));

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// express static folder
app.use('/static', express.static(path.join(__dirname, '../public')));

// routes
var htmlRoutes = require('./controllers/htmlRoutes');
app.use('/', htmlRoutes);

// start server
app.listen(port, function() { console.log('Server listening on PORT ' + port) });