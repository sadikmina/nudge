

const db = require('./db');

const addFeedback = (user_id, message, callback) => {
  db.query(
    'INSERT INTO feedback (user_id, message) VALUES (?, ?)',
    [user_id, message],
    callback
  );
};

const getAllFeedback = (callback) => {
  db.query(
    `SELECT feedback.*, users.name, users.email 
     FROM feedback 
     JOIN users ON feedback.user_id = users.id 
     ORDER BY feedback.submitted_at DESC`,
    callback
  );
};

const deleteFeedback = (id, callback) => {
  db.query('DELETE FROM feedback WHERE id = ?', [id], callback);
};

module.exports = { addFeedback, getAllFeedback, deleteFeedback };
