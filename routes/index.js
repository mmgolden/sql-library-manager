const express = require('express');

// Create new router
const router = express.Router();

// Redirect to the /books route
router.get('/', (req, res) => {
    res.redirect('/books');
});

// Export router
module.exports = router;