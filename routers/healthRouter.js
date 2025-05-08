const express = require('express');
const router = express.Router();
const healthController = require('../controller/healthController');

// Show the calculators page with live results from the database
router.get('/calculators', healthController.showCalculators);

// BMI Calculation (POST request)
router.post('/calculate-bmi', (req, res) => {
  const { weight, height } = req.body;

  if (!weight || !height) {
    return res.status(400).send('Weight and height are required for BMI calculation.');
  }

  const { bmi, bmiCategory } = calculateBMI(weight, height);

  req.session.calculatorResults = { bmi, bmiCategory };
  res.redirect('/health/calculators');
});

// Caloric Needs Calculation (POST request)
router.post('/calculate-caloric-needs', (req, res) => {
  const { weight, height, age, gender, activityLevel } = req.body;

  if (!weight || !height || !age || !gender || !activityLevel) {
    return res.status(400).send('All fields are required for caloric needs calculation.');
  }

  const caloricNeeds = calculateCaloricNeeds(weight, height, age, gender, activityLevel);

  req.session.calculatorResults = { caloricNeeds };
  res.redirect('/health/calculators');
});

// Body Fat Calculation (POST request)
router.post('/calculate-body-fat', (req, res) => {
  const { weight, waist, neck, height, gender } = req.body;

  if (!weight || !waist || !neck || !height || !gender) {
    return res.status(400).send('All fields are required for body fat calculation.');
  }

  const bodyFat = calculateBodyFat(weight, waist, neck, height, gender);

  req.session.calculatorResults = { bodyFat };
  res.redirect('/health/calculators');
});

module.exports = router;
