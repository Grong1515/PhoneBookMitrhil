var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')

const phoneBookCRUD = require('./phoneBookCRUD');

router.use(bodyParser.json())

router.use('/pb', phoneBookCRUD);
router.use(function (err, req, res, next) {
  return res.status(500).json({
    type: err.code,
    message: err.message
  });
})

module.exports = router;
