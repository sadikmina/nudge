// const feedbackModel = require('../model/feedbackModel');

// const submitFeedback = (req, res) => {
//   const userId = req.session.user.id;
//   const { message } = req.body;
//   feedbackModel.submitFeedback(userId, message, (err) => {
//     if (err) return res.send('Could not submit feedback');
//     res.redirect('/dashboard');
//   });
// };

// module.exports = { submitFeedback };


// const feedbackModel = require('../model/feedbackModel');

// const submitFeedback = (req, res) => {
//   const user_id = req.session.userId;
//   const { message } = req.body;

//   if (!message || !user_id) {
//     return res.status(400).send("Feedback message or user not found.");
//   }

//   feedbackModel.addFeedback(user_id, message, (err) => {
//     if (err) return res.status(500).send("Failed to submit feedback.");
//     res.redirect('/dashboard');
//   });
// };

// const getAllFeedback = (req, res) => {
//   feedbackModel.getAllFeedback((err, feedbackList) => {
//     if (err) return res.status(500).send("Failed to load feedback.");
//     res.render('adminFeedback', { feedback: feedbackList });
//   });
// };

// const deleteFeedback = (req, res) => {
//   const feedbackId = req.params.id;
//   feedbackModel.deleteFeedback(feedbackId, (err) => {
//     if (err) return res.status(500).send("Failed to delete feedback.");
//     res.redirect('/admin/feedback');
//   });
// };

// module.exports = { submitFeedback, getAllFeedback, deleteFeedback };

const feedbackModel = require('../model/feedbackModel');

const submitFeedback = (req, res) => {
  const user_id = req.session.user?.id;
  const { message } = req.body;

  if (!message || !user_id) {
    return res.status(400).send("Feedback message or user not found.");
  }

  feedbackModel.addFeedback(user_id, message, (err) => {
    if (err) return res.status(500).send("Failed to submit feedback.");
    res.redirect('/dashboard');
  });
};

const getAllFeedback = (req, res) => {
  feedbackModel.getAllFeedback((err, feedbackList) => {
    if (err) return res.status(500).send("Failed to load feedback.");
    res.render('adminFeedback', { feedback: feedbackList });
  });
};

const deleteFeedback = (req, res) => {
  const feedbackId = req.params.id;
  feedbackModel.deleteFeedback(feedbackId, (err) => {
    if (err) return res.status(500).send("Failed to delete feedback.");
    res.redirect('/admin/feedback');
  });
};

module.exports = { submitFeedback, getAllFeedback, deleteFeedback };
