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

router.get('/delete/:id', function (req, res, next) {
   //console.log(req.params.id);
    Books.remove({ _id: req.params.id }, function() {
        res.redirect('/');
    })
});

router.get('/edit/:id', function (req, res, next){
   Books.findOne({ _id: req.params.id }, function(err, book) {
       res.render('editBooks', { title: 'Edit book', book: book });
   })
});

router.post('/saveEdited', function (req, res, next) {
    Books.findOneAndUpdate({ _id: req.body.id }, { $set: req.body }, function(err, book) {
        console.log(book);
        res.redirect('/');
    })
});

module.exports = router;
