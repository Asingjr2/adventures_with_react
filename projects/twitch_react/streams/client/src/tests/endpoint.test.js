'use strict';
const app = require('../index');
const chain = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Checking all endpoints and methods', () => {

  it('Fetch stream method should return 200 status and be json', () => {
    chai.request(app)
    .get('./')
    .end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    });
  });

  it('Fetch all streams should return method 200 status and be all items', () => {
    chai.request(app)
    .get('./')
    .end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    });
  });
  it('Create method should return 200 status and be json', () => {
    chai.request(app)
    .get('./')
    .end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    });
  });
})
