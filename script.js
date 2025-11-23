console.log("Hello World!");

// 1. Create an array called favoriteFoods with at least 6 foods you love.
const favoriteFoods = ["ramen", "tacos", "pizza", "sushi", "waffles", "pasta"];

// Print the first and last items
console.log(favoriteFoods[0]);  
console.log(favoriteFoods[favoriteFoods.length - 1]);


// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log("One of my favorite foods is " + favoriteFoods[i] + ".");
}


// 3. Print out the ranking for each food like:
// "My #1 favorite food is Ramen"
// "My #2 favorite food is Sushi"
for (let i = 0; i < favoriteFoods.length; i++) {
  const position = i + 1;
  const food = favoriteFoods[i];
  console.log("My #" + position + " favorite food is " + food);
}





// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function describeFood(foodName) {
  console.log(foodName + " is one of my favorite foods.");
}

// Calling the function:
describeFood("tacos");
describeFood("ramen");




// 4b. Call the function at least 3 times
function isLongName(foodName) {
  return foodName.length > 5;
}

const result = isLongName("pizza"); // false
console.log(result);



// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.



// 6. Store the result in an array called foodsWithA. Print out the array.



// 7. Create a new array longFoodNames for foods with names longer than 6 characters.



// 8. Create another array shortFoodNames for foods 6 characters or shorter.



// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."

const myFoods = ["tacos", "pizza", "sushi"];
const popularFoods = ["burger", "pizza", "pasta", "ramen"];

if (myFoods.length > popularFoods.length) {
  console.log("My list is longer.");
} else if (myFoods.length < popularFoods.length) {
  console.log("Popular list is longer.");
} else {
  console.log("Both lists have the same length.");
}

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
const searchFood = "pizza";
let found = false;

for (let i = 0; i < favoriteFoods.length; i++) {
  if (favoriteFoods[i] === searchFood) {
    found = true;
  }
}

if (found) {
  console.log(searchFood + " is in the list.");
} else {
  console.log(searchFood + " is not in the list.");
}

