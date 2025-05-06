const userModel = require('../model/userModel');

const updateProfile = (req, res) => {
  const userId = req.session.user.id;
  const { age, weight, height, goal_weight } = req.body;
  userModel.updateUserProfile(userId, { age, weight, height, goal_weight }, (err) => {
    if (err) return res.send('Profile update failed');
    req.session.user = { ...req.session.user, age, weight, height, goal_weight };
    res.redirect('/dashboard');
  });
};

const deleteProfile = (req, res) => {
  const userId = req.session.user.id;
  userModel.deleteUser(userId, (err) => {
    if (err) return res.send('Delete failed');
    req.session.destroy();
    res.send('Profile deleted');
  });
};

module.exports = { updateProfile, deleteProfile };
