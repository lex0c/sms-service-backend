const request = require('request');
const chai = require('chai');

const expect = chai.expect;

const urlBase = process.env.API_URL;

describe('Logs', () => {
  before(done => {
    request.post({
      headers: { 'content-type': 'application/json' },
      url: `${urlBase}/v1/logs`,
      body: JSON.stringify({ payload: { text: 'foo', sequence: '333666_666', type: 'encode' } }),
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(201);
      done();
    });
  });
  it('should get with status 200', done => {
    request.get({ url : `${urlBase}/v1/logs` }, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('should have "logs" as param', done => {
    request.get({ url : `${urlBase}/v1/logs` }, (error, response, body) => {
      const _body = JSON.parse(body);
      expect(_body.data).to.have.property('logs');
      done();
    });
  });
  it('should log have correct keys', done => {
    request.get({ url : `${urlBase}/v1/logs` }, (error, response, body) => {
      const _body = JSON.parse(body);
      expect(_body.data.logs[0]).to.have.all.keys('payload', 'created_at', '__v', '_id');
      done();
    });
  });
  it('should payload have correct keys', done => {
    request.get({ url : `${urlBase}/v1/logs` }, (error, response, body) => {
      const _body = JSON.parse(body);
      const { payload } = _body.data.logs[0];
      expect(payload).to.have.all.keys('text', 'sequence', 'type');
      done();
    });
  });
});
