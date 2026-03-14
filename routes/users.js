const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get(
  '/',
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Get all users'
    #swagger.responses[200] = {
      description: 'A list of users',
      content: {
        "application/json": {
          schema: [{
            $ref: '#/components/schemas/User'
          }]
        }
      }
    }
    #swagger.responses[500] = {
      description: 'Server error',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/Error'
          }
        }
      }
    }
  */
  usersController.getAll
);

router.post(
  '/',
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Create a user'
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/UserInput'
          }
        }
      }
    }
    #swagger.responses[201] = {
      description: 'User created successfully',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/CreatedUser'
          }
        }
      }
    }
    #swagger.responses[400] = {
      description: 'Invalid request body',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/Error'
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: 'Server error',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/Error'
          }
        }
      }
    }
  */
  usersController.createUser
);

router.get(
  '/:id',
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Get one user by id'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'MongoDB ObjectId for the user',
      required: true,
      type: 'string'
    }
    #swagger.responses[200] = {
      description: 'The requested user',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/User'
          }
        }
      }
    }
    #swagger.responses[400] = {
      description: 'Invalid id',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/Error'
          }
        }
      }
    }
    #swagger.responses[404] = {
      description: 'User not found',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/Error'
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: 'Server error',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/Error'
          }
        }
      }
    }
  */
  usersController.getSingle
);

router.put(
  '/:id',
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Update a user by id'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'MongoDB ObjectId for the user',
      required: true,
      type: 'string'
    }
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/UserInput'
          }
        }
      }
    }
    #swagger.responses[204] = {
      description: 'User updated successfully'
    }
    #swagger.responses[400] = {
      description: 'Invalid id or request body',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/Error'
          }
        }
      }
    }
    #swagger.responses[404] = {
      description: 'User not found',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/Error'
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: 'Server error',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/Error'
          }
        }
      }
    }
  */
  usersController.updateUser
);

router.delete(
  '/:id',
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Delete a user by id'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'MongoDB ObjectId for the user',
      required: true,
      type: 'string'
    }
    #swagger.responses[204] = {
      description: 'User deleted successfully'
    }
    #swagger.responses[400] = {
      description: 'Invalid id',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/Error'
          }
        }
      }
    }
    #swagger.responses[404] = {
      description: 'User not found',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/Error'
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: 'Server error',
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/Error'
          }
        }
      }
    }
  */
  usersController.deleteUser
);


module.exports = router;
