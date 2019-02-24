# SQL Library Manager

This web app is for a fictional library to help them manage their collection of books. It includes pages to list, add, update, and delete books using JavaScript, Node.js, Express, Pug, and the SQL ORM Sequelize. This project was created for the purpose of the Treehouse Full Stack JavaScript Techdegree.

## Project Requirements

This project is reviewed and graded based on a set of requirements.

### Meets Expectations

* The .gitignore file is in place and the node_modules folder is not stored in the repo.
* Running npm install adds all necessary dependencies.
* Running npm start launches the app.
* Project includes the following Sequelize Model and properties: book (title, author, genre, year).
* Uses the appropriate Model validation to ensure that the title and author properties will have values when the form is submitted.
* Project contains at least the following routes: '/', '/books', '/books/new', '/books/new', '/books/:id', '/books/:id/delete'.
* Project contains at least the following views: layout.pug, index.pug, new-book.pug, update-book.pug, error.pug, page-not-found.pug.
* If title or author fields are empty, form will not submit and page shows friendly error message.
* Forms employ Sequelize Model validation rather than HTML’s built in validation.
* Clicking on an input’s label brings focus to corresponding input.
* If routing to a non-existent book id, project uses a global error handler to render a friendly error page.
* If navigating to a non-existent route like /error, the project renders a user friendly "Page Not Found" page.
* Project uses supplied styles.
* General layout matches example markup pages.

### Exceeds Expectations

* Main book list has search feature.
* Search works for all of the following fields: title, author, genre, year.
* Search is case insensitive.
* Search works for partial matches on strings.
* Main book list has pagination feature.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Downloading

Click on the 'Clone or download' button and select 'Download Zip.'

### Installing

Step 1: Unzip the zip file.

Step 2: Open the folder in a text editor.

Step 3: In the terminal, install dependencies

```
npm install
```

Step 4: Start the app

```
npm start
```
Step 5: View the website on http://localhost:3000/