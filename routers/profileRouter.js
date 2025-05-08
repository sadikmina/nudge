// === routers/profileRouter.js ===
const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileController');

// Show profile with current data
router.get('/', profileController.showProfile);

// Handle profile update
router.post('/', profileController.updateProfile);

router.post('/delete', profileController.deleteProfile);


module.exports = router;
