const db = require('../model/db');

exports.showProfile = (req, res) => {
  const userId = req.session.user.id;

  const query = 'SELECT age, gender, height, weight, goal_weight, belly_circumference, neck_circumference FROM users WHERE id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching user profile:', err);
      return res.status(500).send('Database error');
    }
    const profile = results[0];
    res.render('profile', { user: req.session.user, profile });
  });
};

exports.updateProfile = (req, res) => {
  const { age, gender, height, weight, goal_weight, belly_circumference, neck_circumference } = req.body;
  const userId = req.session.user.id;

  const query = `
    UPDATE users SET age = ?, gender = ?, height = ?, weight = ?, goal_weight = ?, belly_circumference = ?, neck_circumference = ?
    WHERE id = ?
  `;
  const values = [age, gender, height, weight, goal_weight, belly_circumference, neck_circumference, userId];

  db.query(query, values, (err) => {
    if (err) {
      console.error('Error updating profile:', err);
      return res.status(500).send('Database error');
    }

    // Update session values
    req.session.user.weight = weight;
    req.session.user.goal_weight = goal_weight;

    res.redirect('/dashboard');
  });
};

exports.deleteProfile = (req, res) => {
  const userId = req.session.user.id;

  db.query('DELETE FROM users WHERE id = ?', [userId], (err) => {
    if (err) {
      console.error('Error deleting profile:', err);
      return res.status(500).send('Error deleting profile');
    }

    // Destroy session and redirect to login
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).send('Error logging out');
      }
      res.redirect('/login');
    });
  });
};
