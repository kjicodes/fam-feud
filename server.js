const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev'))
app.use(express.json()) // body perser - get's json to... (listen to recording)

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Mounted routes


// Catch-all routes


// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;  // notice this is NOT port 3000 (new port for express)

app.listen(port, function() {
  console.log(`Express app running on port ${port}`) // connection string
});



