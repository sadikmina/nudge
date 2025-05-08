// === utils/calculationHelpers.js ===

function calculateBMI(weight, height) {
    const heightMeters = height / 100;
    const bmi = weight / (heightMeters * heightMeters);
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 24.9) category = 'Normal weight';
    else if (bmi < 29.9) category = 'Overweight';
    else category = 'Obese';
    return { bmi: bmi.toFixed(2), category };
  }
  
  function calculateCaloricNeeds(weight, height, age, gender, activityLevel) {
    let bmr = gender === 'male'
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
  
    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    }[activityLevel];
  
    return Math.round(bmr * activityMultiplier);
  }
  
  function calculateBodyFat(gender, height, neck, belly) {
    let bodyFat;
    if (gender === 'male') {
      bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(belly - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
      // Female formula (adjust belly as waist + hip if needed)
      bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(belly + neck) + 0.221 * Math.log10(height)) - 450;
    }
    return bodyFat.toFixed(2);
  }
  
  module.exports = { calculateBMI, calculateCaloricNeeds, calculateBodyFat };
  