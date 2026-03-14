const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getUsersCollection = () => mongodb.getDb().db().collection('users');

const buildUserPayload = (body) => {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return null;
  }

  const { _id, ...user } = body;

  return Object.keys(user).length ? user : null;
};

const getAll = async (req, res) => {
  try {
    const users = await getUsersCollection().find().toArray();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch users' });
  }
};

const getSingle = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: 'Invalid user id' });
  }

  try {
    const user = await getUsersCollection().findOne({ _id: new ObjectId(req.params.id) });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch users' });
  }
};

const createUser = async (req, res) => {
  const user = buildUserPayload(req.body);

  if (!user) {
    return res.status(400).json({ error: 'Request body must contain user data' });
  }

  try {
    const response = await getUsersCollection().insertOne(user);

    if (!response.acknowledged) {
      return res.status(500).json({ error: 'Unable to create user' });
    }

    res.status(201).json({ _id: response.insertedId });
  } catch (error) {
    res.status(500).json({ error: 'Unable to create user' });
  }
};

const updateUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: 'Invalid user id' });
  }

  const user = buildUserPayload(req.body);

  if (!user) {
    return res.status(400).json({ error: 'Request body must contain user data' });
  }

  try {
    const response = await getUsersCollection().updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: user }
    );

    if (!response.matchedCount) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Unable to update user' });
  }
};

const deleteUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: 'Invalid user id' });
  }

  try {
    const response = await getUsersCollection().deleteOne({ _id: new ObjectId(req.params.id) });

    if (!response.deletedCount) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete user' });
  }
};

module.exports = {
  getAll,
  getSingle,
  createUser,
  updateUser,
  deleteUser
};
