// const db = require('./db');

// const setRequestFlags = (user_id, meal, exercise, callback) => {
//   db.query(
//     `INSERT INTO requests (user_id, meal_plan_requested, exercise_suggestion_requested)
//      VALUES (?, ?, ?)
//      ON DUPLICATE KEY UPDATE
//      meal_plan_requested = VALUES(meal_plan_requested),
//      exercise_suggestion_requested = VALUES(exercise_suggestion_requested)`,
//     [user_id, meal, exercise],
//     callback
//   );
// };

// const getRequestFlags = (user_id, callback) => {
//   db.query('SELECT * FROM requests WHERE user_id = ?', [user_id], callback);
// };

// module.exports = { setRequestFlags, getRequestFlags };

// const db = require('./db');

// const setRequestFlags = (user_id, meal, exercise, callback) => {
//   db.query(
//     `INSERT INTO requests (user_id, meal_plan_requested, exercise_suggestion_requested)
//      VALUES (?, ?, ?)
//      ON DUPLICATE KEY UPDATE
//      meal_plan_requested = VALUES(meal_plan_requested),
//      exercise_suggestion_requested = VALUES(exercise_suggestion_requested)`,
//     [user_id, meal, exercise],
//     callback
//   );
// };

// const getAllRequests = (callback) => {
//   const query = `
//     SELECT users.name, users.email, users.age, users.height, users.weight, users.goal_weight, 
//            requests.id, requests.meal_plan_requested, requests.exercise_suggestion_requested
//     FROM requests
//     JOIN users ON requests.user_id = users.id
//   `;
//   db.query(query, callback);
// };

// module.exports = { setRequestFlags, getRequestFlags, getAllRequests };


// const db = require('./db');

// const setRequestFlags = (user_id, meal, exercise, callback) => {
//   db.query(
//     `INSERT INTO requests (user_id, meal_plan_requested, exercise_suggestion_requested)
//      VALUES (?, ?, ?)
//      ON DUPLICATE KEY UPDATE
//      meal_plan_requested = VALUES(meal_plan_requested),
//      exercise_suggestion_requested = VALUES(exercise_suggestion_requested)`,
//     [user_id, meal, exercise],
//     callback
//   );
// };

// const getRequestFlags = (user_id, callback) => {
//   db.query('SELECT * FROM requests WHERE user_id = ?', [user_id], callback);
// };

// const getAllRequests = (callback) => {
//   db.query('SELECT * FROM requests', callback);
// };

// module.exports = { setRequestFlags, getRequestFlags, getAllRequests };

// const db = require('./db');

// // Function to set or update request flags (meal plan, exercise suggestion)
// const setRequestFlags = (user_id, meal, exercise, callback) => {
//   db.query(
//     `INSERT INTO requests (user_id, meal_plan_requested, exercise_suggestion_requested)
//      VALUES (?, ?, ?)
//      ON DUPLICATE KEY UPDATE
//      meal_plan_requested = VALUES(meal_plan_requested),
//      exercise_suggestion_requested = VALUES(exercise_suggestion_requested)`,
//     [user_id, meal, exercise],
//     callback
//   );
// };

// // Function to get all requests, including user details
// const getAllRequests = (callback) => {
//   const query = `
//     SELECT requests.id, requests.user_id, requests.meal_plan_requested, 
//            requests.exercise_suggestion_requested,
//            users.name, users.email, users.age, users.height, users.weight, users.goal_weight
//     FROM requests
//     JOIN users ON requests.user_id = users.id`;
//   db.query(query, callback);
// };

// // Function to delete a request
// const deleteRequest = (requestId, callback) => {
//   db.query('DELETE FROM requests WHERE id = ?', [requestId], callback);
// };

// module.exports = { setRequestFlags, getRequestFlags, getAllRequests, deleteRequest };



const db = require('./db');

// Function to set or update request flags (meal plan, exercise suggestion)
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

// Function to get request flags for a specific user
const getRequestFlags = (user_id, callback) => {
  db.query('SELECT * FROM requests WHERE user_id = ?', [user_id], callback);
};

// Function to get all requests, including user details
const getAllRequests = (callback) => {
  const query = `
    SELECT requests.id, requests.user_id, requests.meal_plan_requested, 
           requests.exercise_suggestion_requested,
           users.name, users.email, users.age, users.height, users.weight, users.goal_weight
    FROM requests
    JOIN users ON requests.user_id = users.id`;
  db.query(query, callback);
};

// Function to delete a request
const deleteRequest = (requestId, callback) => {
  db.query('DELETE FROM requests WHERE id = ?', [requestId], callback);
};

module.exports = { setRequestFlags, getRequestFlags, getAllRequests, deleteRequest };
