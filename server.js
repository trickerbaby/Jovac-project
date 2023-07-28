const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port number

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let quotesData = []; // To store the received data as an array of objects

// Endpoint to receive the form data and store it
app.post('/submit', (req, res) => {
  console.log('Received form data:', req.body);

  // Save the received data in the quotesData array
  quotesData.push(req.body);

  res.sendStatus(200);
});

// Endpoint to serve the index.html page
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Endpoint to send the quotesData as JSON to the client
app.get('/data', (req, res) => {
  res.json(quotesData);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
