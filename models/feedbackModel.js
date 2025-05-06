const db = require('./db');

const submitFeedback = (user_id, message, callback) => {
  db.query(
    'INSERT INTO feedback (user_id, message) VALUES (?, ?)',
    [user_id, message],
    callback
  );
};

module.exports = { submitFeedback };
