const express = require('express');

// Create new router
const router = express.Router();

// Show the full list of books
router.get('/', (req, res) => {
    res.render('index');
});

// Export router
module.exports = router;