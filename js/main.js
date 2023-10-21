// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
  // Get references to HTML elements
  const inputField = document.querySelector('.btn');
  const matchButton = document.querySelector('#matchButton');
  const matchedSongs = document.querySelector('#matchedSongs');

  // Event listener for the "Match" button
  matchButton.addEventListener('click', async function () {
    // Get the user's input
    const userInput = inputField.value;

    // Replace this with your actual API endpoint
    const apiUrl = `https://api.example.com/match?input=${userInput}`;

    try {
      // Make a fetch request to your API
      const response = await fetch(apiUrl);

      if (response.ok) {
        // Parse the response as JSON
        const data = await response.json();

        // Clear previous results
        matchedSongs.innerHTML = '';

        // Display matched songs
        data.songs.forEach((song) => {
          const listItem = document.createElement('li');
          listItem.textContent = song.title;
          matchedSongs.appendChild(listItem);
        });
      } else {
        // Handle error cases
        console.error('API request failed');
        matchedSongs.innerHTML = 'No matches found. Please try again.';
      }
    } catch (error) {
      console.error('An error occurred:', error);
      matchedSongs.innerHTML = 'An error occurred. Please try again later.';
    }
  });
});

// === hamburger menu ===
document.querySelector(".menu-btn").addEventListener("click", () => 
  document.querySelector(".main-menu").classList.toggle("show"))

// === spotify access token === 
const clientID = '12345678910891b8ff58fbeb6dd5';
const clientSecret = '12345678542534f4eb5da89e7d';
const authorizationCode = 'AUTHORIZATION_CODE_FROM_REDIRECT_URI';
const redirectURI = 'YOUR_REDIRECT_URI';

const base64Auth = btoa(`${clientID}:${clientSecret}`);

fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${base64Auth}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    'grant_type': 'authorization_code',
    'code': authorizationCode,
    'redirect_uri': redirectURI,
  }),
})
.then(response => response.json())
.then(data => {
  const accessToken = data.access_token;
  // Now you can use this accessToken to make authorized Spotify API requests.
});


