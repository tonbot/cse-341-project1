const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

const mongodb = require('./data/database');
const swaggerDocument = require('./swagger-output.json');
const port = process.env.PORT || 3000;
const swaggerUiHandler = swaggerUi.setup(swaggerDocument);


app.use(express.json());
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUiHandler);
app.get('/api-docs/', swaggerUiHandler);
app.get('/api-docs.json', (req, res) => {
  res.status(200).json(swaggerDocument);
});

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
