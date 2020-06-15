const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Priviet received a request.');

  const target = process.env.TARGET || 'товарищ';
  res.send(`Привет ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Priviet listening on port', port);
});
