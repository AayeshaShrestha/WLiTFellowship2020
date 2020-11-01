var express = require('express');
var router = express.Router();
const Books = require('../models/books');

/* GET home page. */
router.get('/', function(req, res, next) {
  Books.find({}, function(err, books) {
    if (!err) {
      res.render('index', { title: 'Book App', bookList: books });
    } else {
      console.log('error', err);
    }
  })
});

module.exports = router;
