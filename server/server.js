// MPM: eventually, replace this with webpack-dev-server ?

const express = require('express');
const volleyball = require('volleyball');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// logging middleware
app.use(volleyball);

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

// send index.html
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

// error-handling middleware
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// start the server
app.listen(PORT, function (err) {
	if (err) throw err;
	console.log(`Listening patiently on port ${PORT}`);
});

module.exports = app;
