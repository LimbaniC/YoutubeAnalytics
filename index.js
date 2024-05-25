require('dotenv').config();

const apiKey = process.env.KEY;
console.log(apiKey);


const query = 'JavaScript tutorials';
const maxResults = 10;


const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${encodeURIComponent(query)}&key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // Handle the data as needed
    // e.g., display the results on your webpage
  })
  .catch((error) => {
    console.error('Error:', error);
  });
