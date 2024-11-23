document.addEventListener('DOMContentLoaded', function() {
  // Selecting the necessary DOM elements
  const weightInput = document.querySelector('input[placeholder="Weight (KG)"]');
  const heightInput = document.querySelector('input[placeholder="Height (CM)"]');
  const calculateButton = document.querySelector('input[value="Calculate Now"]');
  const resultContainer = document.createElement('div');

  // Function to calculate BMI
  function calculateBMI() {
      const weight = parseFloat(weightInput.value);
      const height = parseFloat(heightInput.value) / 100; // Converting height to meters
      const bmi = weight / (height * height); // BMI formula

      // Displaying the result
      resultContainer.innerHTML = `<p>Your BMI is: ${bmi.toFixed(2)}</p>`;
      document.body.appendChild(resultContainer);
  }

  // Adding event listener to the calculate button
  calculateButton.addEventListener('click', calculateBMI);
});
