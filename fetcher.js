const request = require('request');
const fs = require('fs');



const fetcher = function(url, destination) {
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.  
    fs.writeFile(destination, body, (err) => {
      var stats = fs.statSync(destination)
      var size = stats.size;
      if (err) {
        console.error(err);
      }
      console.log(`Downloaded ${size} bytes to file ${destination}`) 
    });

  });
};



fetcher("http://example.edu/", "./downloads/index.html");

