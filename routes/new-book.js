const express = require('express');

// Create new router
const router = express.Router();

// GET show the create new book form
router.get('/', (req, res) => {
    res.render('new-book');
});

// POST add a new book to the database
router.post('/', (req, res) => {

});

// Export router
module.exports = router;