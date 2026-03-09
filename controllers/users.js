const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('users').find();
  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users);
  }).catch(() => {
    res.status(500).json({ error: 'Unable to fetch users' });
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('users').find({ _id: userId });

  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users[0]);
  }).catch(() => {
    res.status(500).json({ error: 'Unable to fetch users' });
  });
};

module.exports = {
  getAll,
  getSingle
};