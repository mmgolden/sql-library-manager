const express = require('express');

// Import routes
const indexRoute = require('./routes');
const booksRoute = require('./routes/books');
const newBookRoute = require('./routes/new-book');
const updateBookRoute = require('./routes/update-book');
const deleteBookRoute = require('./routes/delete-book');

// Port
const port = process.env.PORT || 3000;

// Create Express app
const app = express();

// Set view engine to Pug
app.set('view engine', 'pug');

// Serve static files
app.use('/static', express.static('public'));

// Routes
app.use(indexRoute);
app.use('/books', booksRoute);
app.use('/books/new', newBookRoute);
app.use('/books/:id', updateBookRoute);
app.use('/books/:id/delete', deleteBookRoute);

// Create server
app.listen(port, () => console.log(`App is listening to port ${port}`));