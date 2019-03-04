const express = require('express');
const Book = require('../models').Book;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Create new router
const router = express.Router();

// Show the full list of books
router.get('/', (req, res) => {

    // Calculate what the offset should be for pagination
    const calculateOffset = (pageNum) => {
        if (pageNum === undefined || pageNum <= 1) {
            return 0;
        } else {
            return (pageNum - 1) * 10;
        }
    };

    let numOfPages;
    const offset = calculateOffset(req.query.page);
    const limit = 10;

    // Get the total book count and calculate the number of pages for pagination
    Book.count()
        .then((count) => {
            numOfPages = Math.ceil(count / limit);
        });

    // Get all of the books
    Book.findAll({ 
            order: [["title", "ASC"]],
            offset,
            limit
        })
        .then((books) => {
            res.render('index', {
                books,
                numOfPages
            });
        })
        .catch((err) => {
            res.sendStatus(500);
        });
});

// Search
router.post('/', (req, res) => {
    // Calculate what the offset should be for pagination
    const calculateOffset = (pageNum) => {
        if (pageNum === undefined || pageNum <= 1) {
            return 0;
        } else {
            return (pageNum - 1) * 10;
        }
    };

    let numOfPages;
    const offset = calculateOffset(req.query.page);
    const limit = 10;
    const search = req.body.search;

    // Get the books that match the search
    Book.findAll({ 
            where: {
                [Op.or]: [
                    {
                        title: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        author: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        genre: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        year: {
                            [Op.like]: `%${search}%`
                        }
                    }
                ]
            },
            offset,
            limit
        })
        .then((books) => {
            console.log(books);
            if (books.length > 0) {
                res.render('index', {
                    books,
                    numOfPages
                });
            } else {
                res.render('no-results');
            }
        })
        .catch((err) => {
            res.sendStatus(500);
        });
});

// Export router
module.exports = router;