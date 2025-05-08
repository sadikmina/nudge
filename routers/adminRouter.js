// const express = require('express');
// const router = express.Router();
// const requestModel = require('../model/requestModel');

// // Show admin login form
// router.get('/login', (req, res) => {
//   res.render('adminLogin'); // Create this EJS view
// });

// // Handle admin login
// router.post('/login', (req, res) => {
//   const { password } = req.body;
//   const ADMIN_PASSWORD = 'mySecret123'; // CHANGE THIS TO A STRONG PASSWORD

//   if (password === ADMIN_PASSWORD) {
//     req.session.isAdmin = true;
//     res.redirect('/admin/requests');
//   } else {
//     res.status(401).send('Incorrect admin password.');
//   }
// });

// // Protect admin routes
// router.use((req, res, next) => {
//   if (req.session.isAdmin) return next();
//   res.redirect('/admin/login');
// });

// // Admin panel
// router.get('/requests', (req, res) => {
//   requestModel.getAllRequests((err, requests) => {
//     if (err) return res.status(500).send('Error loading requests');
//     res.render('adminRequest', { requests });
//   });
// });

// // Resolve a request
// router.post('/requests/:id/resolve', (req, res) => {
//   const requestId = req.params.id;
//   requestModel.deleteRequest(requestId, (err) => {
//     if (err) return res.status(500).send('Error resolving request');
//     res.redirect('/admin/requests');
//   });
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const requestModel = require('../model/requestModel');

// // Show admin login form
// router.get('/login', (req, res) => {
//   res.render('adminLogin'); // Make sure this EJS file exists
// });

// // Handle admin login
// router.post('/login', (req, res) => {
//   const { password } = req.body;
//   const ADMIN_PASSWORD = 'mySecret123'; // Use a stronger password

//   if (password === ADMIN_PASSWORD) {
//     req.session.isAdmin = true;
//     res.redirect('/admin/requests');
//   } else {
//     res.status(401).send('Incorrect admin password.');
//   }
// });

// // Protect admin routes: check for admin session
// router.use((req, res, next) => {
//   if (req.session.isAdmin) return next();
//   res.redirect('/admin/login'); // Redirect to login if not authenticated
// });

// // Admin panel to view all requests
// router.get('/requests', (req, res) => {
//   requestModel.getAllRequests((err, requests) => {
//     if (err) {
//       return res.status(500).send('Error loading requests');
//     }
//     res.render('adminRequest', { requests });
//   });
// });

// // Resolve a request (delete)
// router.post('/requests/:id/resolve', (req, res) => {
//   const requestId = req.params.id;
//   requestModel.deleteRequest(requestId, (err) => {
//     if (err) {
//       return res.status(500).send('Error resolving request');
//     }
//     res.redirect('/admin/requests');
//   });
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const requestModel = require('../model/requestModel');

// // Show admin login form
// router.get('/login', (req, res) => {
//   res.render('adminLogin');
// });

// // Handle admin login
// router.post('/login', (req, res) => {
//   const { password } = req.body;
//   const ADMIN_PASSWORD = 'mySecret123'; // Use a stronger password

//   if (password === ADMIN_PASSWORD) {
//     req.session.isAdmin = true;
//     res.redirect('/admin/requests');
//   } else {
//     res.status(401).send('Incorrect admin password.');
//   }
// });

// // Protect admin routes: check for admin session
// router.use((req, res, next) => {
//   if (req.session.isAdmin) return next();
//   res.redirect('/admin/login');
// });

// // Admin panel to view all requests
// router.get('/requests', (req, res) => {
//   requestModel.getAllRequests((err, requests) => {
//     if (err) {
//       return res.status(500).send('Error loading requests');
//     }
//     res.render('adminRequest', { requests });
//   });
// });

// // Resolve a request (delete)
// router.post('/requests/:id/resolve', (req, res) => {
//   const requestId = req.params.id;
//   requestModel.deleteRequest(requestId, (err) => {
//     if (err) {
//       return res.status(500).send('Error resolving request');
//     }
//     res.redirect('/admin/requests');
//   });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const requestModel = require('../model/requestModel');
const feedbackController = require('../controller/feedbackController');

// Admin login page
router.get('/login', (req, res) => {
  res.render('adminLogin');
});

router.post('/login', (req, res) => {
  const { password } = req.body;
  const ADMIN_PASSWORD = 'mySecret123';
  if (password === ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    res.redirect('/admin');
  } else {
    res.status(401).send('Incorrect admin password.');
  }
});

// Middleware to protect admin routes
router.use((req, res, next) => {
  if (req.session.isAdmin) return next();
  res.redirect('/admin/login');
});

// Admin dashboard with navigation
router.get('/', (req, res) => {
  res.render('adminDashboard');
});

// Admin – View Requests
router.get('/requests', (req, res) => {
  requestModel.getAllRequests((err, requests) => {
    if (err) return res.status(500).send('Error loading requests');
    res.render('adminRequest', { requests });
  });
});

// Resolve (delete) request
router.post('/requests/:id/resolve', (req, res) => {
  const requestId = req.params.id;
  requestModel.deleteRequest(requestId, (err) => {
    if (err) return res.status(500).send('Error resolving request');
    res.redirect('/admin/requests');
  });
});

// Admin – View Feedback
router.get('/feedback', feedbackController.getAllFeedback);

// Resolve (delete) feedback
router.post('/feedback/:id/resolve', feedbackController.deleteFeedback);

module.exports = router;
