/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Brittany Giles",
    photo: "images/Brittany Headshot.png",
    favoriteFoods: ["Echiladas", "Ice cream", "Popsicles", "Pasta", "Burgers"],
    hobbies: ["Volleyball", "Videogames", "Watching Movies", "Coloring", "Going to the Gym"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Austin, TX",
        length: "4 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Escondido, CA",
        length: "10 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Chester, NJ",
        length: "3.5 years",
    }
)
myProfile.placesLived.push(
    {
        place: "Bailey, CO",
        length: "4 months"
    }
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
   });
