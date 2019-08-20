import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  payload: { type: Object, required: true, default: {} },
  created_at: { type: Date, default: new Date() },
});

export default class Model {
  static async getAll() {
    const log = mongoose.model('Log', logSchema);
    return new Promise((resolve, reject) => {
      log.find({}, (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      });
    });
  };

  static async create(payload) {
    const log = mongoose.model('Log', logSchema);
    return new Promise((resolve, reject) => {
      log.create({ created_at: new Date(), payload }, (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      });
    });
  }
}
