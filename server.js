// server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Hi World! 21011102083');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
