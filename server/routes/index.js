var express = require('express');
var router = express.Router();

const home = require('./home');
const api = require('./api');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.use('/', home);
router.use('/api', api);

module.exports = router;