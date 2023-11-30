// quotes -> ``

const country = "London";
const api_key = 'YOUR APIKEY';
let newData;
// Make a simple GET request
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${api_key}`)
  .then(response => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Fetch error:', error);
  });