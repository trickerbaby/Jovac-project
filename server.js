const express = require('express');
const app = express();
const port = 3000; 

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let storedData = {}; 


app.post('/submit', (req, res) => {
  console.log('Received form data:', req.body);

 
  storedData = req.body;

  res.sendStatus(200);
});


app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/data', (req, res) => {
  res.json(storedData);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
