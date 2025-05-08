// const express = require('express');
// const session = require('express-session');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();
// const port = 3000;

// // Routers
// const authRouter = require('./routers/authRouter');
// const profileRouter = require('./routers/profileRouter');
// const healthRouter = require('./routers/healthRouter');
// const logRouter = require('./routers/logRouter');
// const feedbackRouter = require('./routers/feedbackRouter');
// const requestRouter = require('./routers/requestRouter');
// const adminRouter = require('./routers/adminRouter');



// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// // Session middleware
// app.use(session({
//   secret: 'nudge-secret', // Use a stronger key in production
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false } // Set to true when using HTTPS in production
// }));

// // Set view engine and views directory
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Routes
// app.use('/', authRouter); // Auth routes (login, register, etc.)
// app.use('/profile', profileRouter); // Profile management
// app.use('/health', healthRouter); // Health calculators
// app.use('/logs', logRouter); // Logs route
// app.use('/feedback', feedbackRouter); // Feedback route
// app.use('/request', requestRouter); // User suggestion requests
// app.use('/admin', adminRouter); // Admin panel routes

// // Home page route
// app.get('/', (req, res) => {
//   res.render('index'); // Make sure you have an index.ejs in your views folder
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Nudge app running at http://localhost:${port}`);
// });

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Routers
const authRouter = require('./routers/authRouter');
const profileRouter = require('./routers/profileRouter');
const healthRouter = require('./routers/healthRouter');
const logRouter = require('./routers/logRouter');
const requestRouter = require('./routers/requestRouter');
const adminRouter = require('./routers/adminRouter');

// Controllers
const feedbackController = require('./controller/feedbackController'); // <-- Added controller directly

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Session middleware
app.use(session({
  secret: 'nudge-secret', // Use a stronger key in production
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true when using HTTPS in production
}));

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', authRouter);
app.use('/profile', profileRouter);
app.use('/health', healthRouter);
app.use('/logs', logRouter);
app.use('/request', requestRouter);
app.use('/admin', adminRouter);

// Feedback route (POST only, directly handled by controller)
app.post('/feedback', feedbackController.submitFeedback); // <-- Add this line

// Home page route
app.get('/', (req, res) => {
  res.render('index');
});

// Start server
app.listen(port, () => {
  console.log(`Nudge app running at http://localhost:${port}`);
});
