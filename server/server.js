const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');

const globals = require('./globals');
// const db = require('../db');
const engines = require('consolidate');
const routes = require('./routes');


const server = require('http').createServer(app);

app.engine('html', function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(new Error(err));
    return callback(null, content.toString());
  });
});
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, '../bundle')));

/* DEV TOOLS */
if (process.env.NODE_ENV !== 'prod') (function () {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const config = require('./../webpack.config.js');
  const compiler = webpack(config);

  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.
  // console.log(config.output.publicPath);

  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
  
  app.use(webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath: config.output.publicPath
  }));

})();
/* DEV TOOLS */

app.use('/', routes);

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});