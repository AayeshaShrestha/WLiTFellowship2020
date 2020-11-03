var express = require('express');
var router = express.Router();
let books = require('../resources/books');

router.get('/add', function (req, res, next) {
    res.render('addBooks', {
        title: 'Add book',
    });
});

router.post('/save', function (req, res, next) {
    books.push({ ...req.body, _id: `00${ books.length + 1 }`});
    res.redirect('/');
});

router.get('/remove/:index', function (req, res) {
    books.splice(req.params.index, 1);
    res.redirect('/');
});

router.get('/edit/:id', function (req, res) {
    const book = books.find( book => book._id === req.params.id );
    res.render('editBooks', {
        title: 'Edit book',
        book
    });
});

router.post('/saveEdited/:id', function (req, res) {
    const index = books.findIndex((book) => { return book._id === req.params.id });
    books.splice(index, 1, { ...req.body, _id: index });
    res.redirect('/');
});
module.exports = router;
