/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Brittany Giles';
let currentYear = '2023';
let profilePicture = 'images/Brittany Headshot.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
let imageElement = document.getElementById('image');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
if (imageElement) {
    imageElement.setAttribute = ('src', profilePicture);
    imageElement.setAttribute = ('alt', `Profile image of ${name}`);
}

/* Step 5 - Array */
let favoriteFood = ["Enchiladas", "Ice cream", "Popsicles", "Pasta"];
foodElement.innerHTML = favoriteFood;
let favoriteFoodItem = 'Burgers';
favoriteFood.push(favoriteFoodItem);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;