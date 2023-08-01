// Question 5 + 6

const express = require('express');
const fs = require('fs').promises; // Using fs.promises to access Promise-based versions of fs functions
const app = express();
const port = 3000;
// Function to read the content of the index.html file using a Promise
function readHTMLContent() {
  return fs.readFile('index.html', 'utf8');
}
app.get('/', (req, res) => {
  // Read and send the HTML content immediately when a request is received
  readHTMLContent()
    .then((htmlContent) => {
      res.send(htmlContent);
    })
    .catch((err) => {
      console.error('Error reading the HTML file:', err);
      res.status(500).send('Internal Server Error');
    });
});
// Set a time interval (e.g., every 30 seconds) to update and send the HTML content
const intervalTimeInSeconds = 30;
setInterval(() => {
  app.get('/', (req, res) => {
    // Read and send the updated HTML content at each interval
    readHTMLContent()
      .then((htmlContent) => {
        res.send(htmlContent);
      })
      .catch((err) => {
        console.error('Error reading the HTML file:', err);
        res.status(500).send('Internal Server Error');
      });
  });
}, intervalTimeInSeconds * 1000); // Convert seconds to milliseconds
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


