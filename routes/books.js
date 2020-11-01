var express = require('express');
var router = express.Router();

let Books = require('../models/books');

router.get('/add', function (req, res, next) {
    res.render('addBooks', {
        title: 'Add book',
    });
});

router.post('/save', function (req, res, next) {
    const book = new Books(req.body);

    let promise = book.save();
    promise.then(() => {
        console.log('Book added');
        res.redirect('/');
    })

});

module.exports = router;
