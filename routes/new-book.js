const express = require('express');
const Book = require('../models').Book;

// Create new router
const router = express.Router();

// GET show the create new book form
router.get('/', (req, res) => {
    res.render('new-book');
});

// POST add a new book to the database
router.post('/', (req, res) => {
    Book.create(req.body)
        .then((book) => {
            res.redirect(`/books/${book.id}`);
        })
        .catch((err) => {
            if (err.name === "SequelizeValidationError") {
                res.render('new-book', {
                    book: Book.build(req.body),
                    errors: err.errors,
                });
            } else {
                throw err;
            }
        })
        .catch((err) => {
            res.sendStatus(500);
        });
});

// Export router
module.exports = router;