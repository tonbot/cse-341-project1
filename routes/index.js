const router = require('express').Router();

router.get(
  '/',
  /*
    #swagger.summary = 'Check that the API is running'
    #swagger.responses[200] = {
      description: 'Application welcome message',
      content: {
        "text/html": {
          schema: {
            type: 'string',
            example: 'Hello, World!'
          }
        }
      }
    }
  */
  (req, res) => {
    res.send('Hello, World!');
  }
);

router.use('/users', require('./users'));

module.exports = router;
