const request = require('request');
const chai = require('chai');

const expect = chai.expect;

const urlBase = 'http://localhost:4000/api';

describe('Logs', () => {
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
});
