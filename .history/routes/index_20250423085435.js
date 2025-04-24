const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// Route handler for the root path (GET)
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

// Route handler for the "/new" path (GET) - serves the form
router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

// Route handler for the "/new" path (POST) - handles form submission
router.post('/new', (req, res) => {
  // Access the data submitted from the form using req.body
  const messageUser = req.body.userName;    // Gets the value from the input with name="userName"
  const messageText = req.body.messageText;  // Gets the value from the textarea with name="messageText"

  // Create a new message object
  const newMessage = {
    text: messageText,
    user: messageUser,
    added: new Date() // Add the current date and time
  };

  // Add the new message to our messages array
  messages.push(newMessage);

  // We'll redirect the user after adding the message in the next step
  // For now, let's just log the new message to the console
  console.log("New message received:", newMessage);
  res.redirect('/');

  // You could render a success page here, but we'll redirect instead
  // res.send('Message received!'); // Temporarily uncomment this to see it work before redirect
});

router.get('/message/:index', (req, res) => {

    console.log(`Attempted to view message details for index: ${req.params.index}`);
    res.redirect('/'); // Redirecting back to the main list for now
  });
  
// Export the router
module.exports = router;