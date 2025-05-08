// const db = require('./db');

// const addLog = (user_id, type, description, callback) => {
//   db.query(
//     'INSERT INTO logs (user_id, type, description) VALUES (?, ?, ?)',
//     [user_id, type, description],
//     callback
//   );
// };

// const getLogsByUser = (user_id, callback) => {
//   db.query('SELECT * FROM logs WHERE user_id = ?', [user_id], callback);
// };

// module.exports = { addLog, getLogsByUser };

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
