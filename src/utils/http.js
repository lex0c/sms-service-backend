export default class HttpUtils {
  static successHandler(req, res, data, status = 200) {
    res.status(status).jsonp({ data });
  }

  static errorHandler(req, res, errors, status = 400) {
    res.status(status).jsonp({ errors });
  }
}
