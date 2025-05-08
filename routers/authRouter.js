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

// Show dashboard (protected route)
router.get('/dashboard', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login'); // Redirect to login if not logged in
  }
  res.render('dashboard', { user: req.session.user }); // Pass user data to dashboard view
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Failed to destroy session');
    }
    res.redirect('/'); 
  });
});


module.exports = router;


