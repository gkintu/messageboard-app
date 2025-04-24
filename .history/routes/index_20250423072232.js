// Require the express package
const express = require('express');
// Create a new router object. This object acts like a mini-application
// that can have its own routes and middleware.
const router = express.Router();

// Define a route handler for the root path ("/")
// When a GET request comes to "/", this function will be executed.
router.get('/', (req, res) => {
  // Render the 'index' view (EJS template)
  // The first argument is the name of the view file (index.ejs in the views folder).
  // The second argument is an object containing local variables that will be
  // available inside the EJS template.
  res.render('index', { title: 'Mini Messageboard' });
});

// Export the router so it can be used in other files (like app.js)
module.exports = router;