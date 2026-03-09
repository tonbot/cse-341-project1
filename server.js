const express = require('express');
const app = express();

const mongodb = require('./data/database');
const port = process.env.PORT || 3000;



app.use('/', require('./routes'));


mongodb.initDb((err) => {
  if (err) {
    console.log('Unable to connect to database');
  } else {
    console.log('Database connection ready');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});