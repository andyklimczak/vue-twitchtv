var serverFactory = require('spa-server');

var server = serverFactory.create({
  // static assets output
  path: './dist',
  // heroku requires it to listen to a default $PORT
  port: process.env.PORT || 8080,
  // SPA requires only one HTML file and always default to that
  fallback: '/index.html'
});

server.start();
