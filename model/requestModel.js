
const db = require('./db');

const setRequestFlags = (user_id, meal, exercise, callback) => {
  db.query(
    `INSERT INTO requests (user_id, meal_plan_requested, exercise_suggestion_requested)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE
     meal_plan_requested = VALUES(meal_plan_requested),
     exercise_suggestion_requested = VALUES(exercise_suggestion_requested)`,
    [user_id, meal, exercise],
    callback
  );
};

const getRequestFlags = (user_id, callback) => {
  db.query('SELECT * FROM requests WHERE user_id = ?', [user_id], callback);
};

const getAllRequests = (callback) => {
  const query = `
    SELECT requests.id, requests.user_id, requests.meal_plan_requested, 
           requests.exercise_suggestion_requested,
           users.name, users.email, users.age, users.height, users.weight, users.goal_weight
    FROM requests
    JOIN users ON requests.user_id = users.id`;
  db.query(query, callback);
};

const deleteRequest = (requestId, callback) => {
  db.query('DELETE FROM requests WHERE id = ?', [requestId], callback);
};

module.exports = { setRequestFlags, getRequestFlags, getAllRequests, deleteRequest };
