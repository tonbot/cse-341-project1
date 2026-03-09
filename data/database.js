const dotenv = require('dotenv');
dotenv.config();


const { MongoClient } = require('mongodb');

let database;

const initDb = (callback) => {
  if (database) {
    console.warn('Trying to init DB again!');
    return callback(null, database);
  } else {
    MongoClient.connect(process.env.MONGODB_URL).then((client) => { 
         database = client;
         callback(null, database);
        }).catch((err) => { 
            callback(err);
        });
        
    }   
}

const getDatabase = () => {
  if (!database) {
    throw Error('Database not initialized');
  }
  return database;
}

module.exports = {
  initDb,
  getDb: getDatabase,
};