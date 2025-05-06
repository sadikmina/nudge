const feedbackModel = require('../model/feedbackModel');

const submitFeedback = (req, res) => {
  const userId = req.session.user.id;
  const { message } = req.body;
  feedbackModel.submitFeedback(userId, message, (err) => {
    if (err) return res.send('Could not submit feedback');
    res.redirect('/dashboard');
  });
};

module.exports = { submitFeedback };
