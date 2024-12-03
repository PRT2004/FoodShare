document.addEventListener('DOMContentLoaded', () => {
  const API_URL = 'http://localhost:5000';

  const signupForm = document.getElementById('signup-form');
  const mealList = document.getElementById('meal-list');

  // Handle Signup
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const type = document.getElementById('user-type').value;

    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, type }),
    });

    const data = await response.json();
    alert(data.message);
  });

  // Fetch Meals
  const fetchMeals = async () => {
    const response = await fetch(`${API_URL}/meals`);
    const meals = await response.json();

    mealList.innerHTML = meals
      .map(
        (meal) => `
      <div class="card">
        <h3>${meal.name}</h3>
        <p>Price: $${meal.price}</p>
        <p>Nutrition: ${meal.nutrition}</p>
        <p>Location: ${meal.location}</p>
      </div>
    `
      )
      .join('');
  };

  fetchMeals();
});
