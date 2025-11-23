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
// 4a. Create a function printFoodRecommendation(foodName) that prints:
// "Have you ever tried ____?"
// "I always recommend ____ to friends."
// "Trust me — ____ is delicious."

function printFoodRecommendation(foodName) {
  console.log("Have you ever tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to friends.");
  console.log("Trust me — " + foodName + " is delicious.");
}

// 4b. Call the function at least 3 times
printFoodRecommendation("ramen");
printFoodRecommendation("tacos");
printFoodRecommendation("pasta");



// 5. Print out only foods that have an "a" in the name.
for (let i = 0; i < friendFavorites.length; i++) {
  const food = friendFavorites[i];
  if (food.toLowerCase().includes("a")) {
    console.log(food);
  }
}



// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = [];

for (let i = 0; i < friendFavorites.length; i++) {
  const food = friendFavorites[i];
  if (food.toLowerCase().includes("a")) {
    foodsWithA.push(food);
  }
}

console.log("Foods with 'a':", foodsWithA);



// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = [];

for (let i = 0; i < friendFavorites.length; i++) {
  const food = friendFavorites[i];
  if (food.length > 6) {
    longFoodNames.push(food);
  }
}

console.log("Long food names:", longFoodNames);



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

