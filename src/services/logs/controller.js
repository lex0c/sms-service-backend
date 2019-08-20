import Model from './model';

export default class Controller {
  static getAll() {
    return Model.getAll();
  };

  static create(body) {
    return new Promise(async (resolve, reject) => {
      if (!body.payload) {
        reject([{ msg: 'payload is required!' }]);
      }
      resolve(await Model.create(body.payload));
    });
  };
}
