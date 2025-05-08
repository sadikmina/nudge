
const requestModel = require('../model/requestModel');

const setRequest = (req, res) => {
  if (!req.session.user) {
    return res.status(401).send('Unauthorized: Please log in');
  }

  const userId = req.session.user.id;
  const meal = req.body.meal === 'on' ? 1 : 0;
  const exercise = req.body.exercise === 'on' ? 1 : 0;

  if (!meal && !exercise) {
    return res.status(400).send('Please select at least one suggestion type.');
  }

  requestModel.setRequestFlags(userId, meal, exercise, (err) => {
    if (err) {
      console.error('Error setting request:', err);
      return res.status(500).send('Could not set request due to a server error.');
    }
    res.redirect('/dashboard');
  });
};

const showRequestForm = (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  res.render('request');
};

module.exports = { setRequest, showRequestForm };
