const db = require('./db');

const addFeedback = (user_id, message, callback) => {
  db.query(
    'INSERT INTO feedback (user_id, message) VALUES (?, ?)',
    [user_id, message],
    callback
  );
};

const getAllFeedback = (callback) => {
  db.query('SELECT f.*, u.name FROM feedback f JOIN users u ON f.user_id = u.id ORDER BY submitted_at DESC', callback);
};

const deleteFeedback = (id, callback) => {
  db.query('DELETE FROM feedback WHERE id = ?', [id], callback);
};

module.exports = { addFeedback, getAllFeedback, deleteFeedback };
