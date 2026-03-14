const swaggerAutogen = require('swagger-autogen')();

const port = process.env.PORT || 3000;
const publishedApiUrl =
  process.env.PUBLIC_API_URL || 'https://cse-341-project1-n5gz.onrender.com';

const doc = {
  openapi: '3.0.0',
  info: {
    title: 'CSE 341 Project 1 API',
    version: '1.0.0',
    description: 'Swagger documentation for the users API.'
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: 'Local development server'
    },
    {
      url: publishedApiUrl,
      description: 'Published Render API'
    }
  ],
  tags: [
    {
      name: 'Users',
      description: 'Create, read, update, and delete user records'
    }
  ],
  components: {
    schemas: {
      User: {
        _id: '69aeb7b89bf1ee9843f8bf06',
        firstName: 'Toyin',
        lastName: 'Ajiboye',
        email: 'toyin@example.com',
        favoriteColor: 'blue',
        birthday: '1998-10-21'
      },
      UserInput: {
        firstName: 'Toyin',
        lastName: 'Ajiboye',
        email: 'toyin@example.com',
        favoriteColor: 'blue',
        birthday: '1998-10-21'
      },
      CreatedUser: {
        _id: '69aeb7b89bf1ee9843f8bf06'
      },
      Error: {
        error: 'Unable to fetch users'
      }
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js', './routes/users.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
