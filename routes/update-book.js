const express = require('express');

// Create new router
const router = express.Router();

// GET show book detail form
router.get('/', (req, res) => {
    res.render('update-book');
});

// POST update book info in the database
router.post('/', (req, res) => {
    
});

// Export router
module.exports = router;