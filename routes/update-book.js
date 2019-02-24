const express = require('express');
const Book = require('../models').Book;

// Create new router
const router = express.Router({mergeParams: true});

// GET show book detail form
router.get('/', (req, res) => {
    Book.findOne({
            where: {id: req.params.id}
        })
        .then((book) => {
            if (book) {
                res.locals.book = book;
                res.render('update-book');
            } else {
                res.sendStatus(404);
            }
        })
        .catch((err) => {
            res.sendStatus(500);
        });
});

// POST update book info in the database
router.post('/', (req, res) => {
    
});

// Export router
module.exports = router;