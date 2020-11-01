var express = require('express');
var router = express.Router();

router.get('/add', function (req, res, next) {
    res.render('addBooks', {
        title: 'Add book',
    });
});

router.post('/save', function (req, res, next) {
    console.log(req.body);
});

module.exports = router;
