document.getElementById('refresh-button').addEventListener('click', function() {
   fetchCatImage();
});

function fetchCatImage() {
   fetch('https://api.thecatapi.com/v1/images/search')
       .then(response => response.json())
       .then(data => {
           document.getElementById('cat-image').src = data[0].url;
       })
       .catch(error => {
           console.error('Error fetching cat image:', error);
       });
}

fetchCatImage();