var express = require('express');
var router = express.Router();

const phoneBookDb = require('../../models/phoneBook.db');
phoneBookDb.create({name: 'Viktor G', phone: '+7 913 794 7579', email: 'test@qwe.com'});
phoneBookDb.create({name: 'Mark R', phone: '+79139757579', email: 'test@qwe.com'});
phoneBookDb.create({phone: '79137594779', email: 'test3@qwe.com'});

router.get('/', function (req, res) {
  res.json(phoneBookDb.get());
});
router.get('/:id', function (req, res) {
  res.json(phoneBookDb.get(req.params.id));
});
router.post('/', function (req, res, next) {
  try {
    res.json(phoneBookDb.create(req.body.data));
  } catch (e) {
    next(e);
  }
});
router.put('/', function (req, res, next) {
  try {
    res.json(phoneBookDb.update(req.body.data));
  } catch (e) {
    next(e);
  }
});
router.delete('/:id', function (req, res) {
  phoneBookDb.remove(req.params.id);
  res.send();
});

router.use(function HandleInvalidDataError(err, req,res, next) {
  if (err instanceof InvalidDataError) {
    return res.status(422).json({
      type: 'InvalidDataError',
      message: err.message
    });
  }
  next(err);
})

module.exports = router;
