const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
});
async function fetchFoodData(category) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`);
      const data = await response.json();
      displayFoodItems(data.meals);
    } catch (error) {
      console.error('Error fetching for food data:', error);
    }
  }

  function displayFoodItems(meals) {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = ''; // Clear previous data
    meals.forEach(meal => {
      const foodCard = `
        <div class="card w-full bg-base-100 shadow-xl">
          <figure><img src="${meal.strMealThumb}" alt="${meal.strMeal}" /></figure>
          <div class="card-body">
            <h2 class="card-title">${meal.strMeal}</h2>
            <p>${meal.strInstructions.slice(0, 100)}...</p>
          </div>
        </div>
      `;
      foodContainer.innerHTML += foodCard;
    });
  }

  // Add event listeners to category buttons
  document.querySelectorAll('.category-btn').forEach(button => {
   
    
    button.addEventListener('click', (e) => {

      const category = e.target.getAttribute('data-category');
      fetchFoodData(category);

    });
  });
  button.style.background ="#ffffff";

  // Fetch default category on page load
  fetchFoodData('Potato');

