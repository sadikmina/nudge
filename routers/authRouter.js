// const express = require('express');
// const router = express.Router();


// router.get('/', (req, res) => {
//   res.send('Auth router working!');
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// Show registration form
router.get('/register', (req, res) => {
  res.render('register'); // This looks for views/register.ejs
});

// Handle registration
router.post('/register', authController.register);

// Show login form
router.get('/login', (req, res) => {
  res.render('login'); // This looks for views/login.ejs
});

// Handle login
router.post('/login', authController.login);

// Logout
router.get('/logout', authController.logout);

module.exports = router;
