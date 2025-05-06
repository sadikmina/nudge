const db = require('./db');

const createUser = (userData, callback) => {
  const { name, email, password } = userData;
  db.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    callback
  );
};

const findUserByEmail = (email, callback) => {
  db.query('SELECT * FROM users WHERE email = ?', [email], callback);
};

const updateUserProfile = (id, data, callback) => {
  const { age, weight, height, goal_weight } = data;
  db.query(
    'UPDATE users SET age = ?, weight = ?, height = ?, goal_weight = ? WHERE id = ?',
    [age, weight, height, goal_weight, id],
    callback
  );
};

const deleteUser = (id, callback) => {
  db.query('DELETE FROM users WHERE id = ?', [id], callback);
};

module.exports = {
  createUser,
  findUserByEmail,
  updateUserProfile,
  deleteUser,
};
