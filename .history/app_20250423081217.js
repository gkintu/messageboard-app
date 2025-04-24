// Require the express package
const express = require('express');
// Create an instance of the express application
const app = express();
// Define the port number the server will listen on
const port = 3000;


// Set the view engine to EJS. This tells Express to use EJS for rendering templates.
app.set('view engine', 'ejs');
// Set the directory where the view files (EJS templates) are located.
// We created a 'views' folder for this purpose.
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory.
// Files in 'public' like CSS or images can be accessed directly via their path in the URL.
// For example, if you have 'public/style.css', it's available at http://localhost:3000/style.css.
app.use(express.static(__dirname + '/public'));

// We'll add our routes here later
const indexRouter = require('./routes/index');
app.use('/', indexRouter);
// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message to the console once the server starts successfully
  console.log(`Server listening on port ${port}`);
  console.log(`Open your browser at http://localhost:${port}`);
});