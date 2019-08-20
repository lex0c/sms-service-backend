import mongoose from 'mongoose';

export default () => {
  const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    useNewUrlParser: true,
  };

  const db = mongoose.connect(process.env.DB_URL, options).then(() => {
    console.info('mongodb: Is connected!');
  }, err => {
    throw 'mongodb: Something is wrong on connection!'
  });

  return db;
}
