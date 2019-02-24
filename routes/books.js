const express = require('express');
const Book = require('../models').Book;

// Create new router
const router = express.Router();

// Show the full list of books
router.get('/', (req, res) => {
    Book.findAll({ order: [["title", "ASC"]] })
        .then((books) => {
            res.locals.books = books;
            res.render('index');
        })
        .catch((err) => {
            res.sendStatus(500);
        });
});

// Export router
module.exports = router;