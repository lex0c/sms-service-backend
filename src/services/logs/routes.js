import Controller from './controller';
import HttpUtils from '../../utils/http';

export default app => {
  app.get('/api/v1/logs', (req, res) => {
    Controller.getAll()
      .then(logs => HttpUtils.successHandler(req, res, { logs }))
      .catch(err => HttpUtils.errorHandler(req, res, [err]));
  });

  app.post('/api/v1/logs', (req, res) => {
    Controller.create(req.body)
      .then(log => HttpUtils.successHandler(req, res, null, 201))
      .catch(err => HttpUtils.errorHandler(req, res, [err]));
  });
}
