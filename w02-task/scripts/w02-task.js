/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Brittany Giles';
let currentYear = '2023';
let profilePicture = 'images/Brittany Headshot.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('image');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute = ('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${nameVariable}`);

/* Step 5 - Array */
let favoriteFoods = ["Enchiladas, Ice cream, Popsicles, Pasta"];
foodElement.innerHTML = favoriteFoods;

let favoriteFoodsItem = 'Burgers';
favoriteFood.push(favoriteFoodsItem);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;