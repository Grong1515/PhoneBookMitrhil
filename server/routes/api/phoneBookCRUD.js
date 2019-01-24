var express = require('express');
var router = express.Router();

const phoneBookDb = require('../../models/phoneBook.db');
phoneBookDb.create({name: 'Vladislav G', phone: '+7 345 543 7979', email: 'test@qwe.com'});
phoneBookDb.create({name: 'Mark R', phone: '+712397577777', email: 'test@qwe.com'});
phoneBookDb.create({phone: '79137594779', email: 'test3@qwe.com'});
phoneBookDb.create({name: 'Igor K. L.', phone: '+7 345 987 71212', email: 'test@qwe.com'});

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
