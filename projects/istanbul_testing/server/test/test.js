const app = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

// required to update chai testing
chai.use(chaiHttp);

const baseURL = 'localhost:3000';
// keeps app open
const requester = chai.request.agent(baseURL);

// high level category for testing 
describe('Testing landing page endpoint', () => {
  // single test with app opening and closing
  it('should return status of 200', (done) => {
    chai.request(app)
    .get('/')
    .end(function (err, res) {
      expect(res).to.be.status(200);
      done();
    });
  });

  // keeping app open for continued tests using requester
  // it('should return status of 200, be text, and contain Soccer', (done) => {
  //   requester
  //   .get('/')
  //   .end(function(err, res) {
  //     expect(res).to.have.status(200);
  //     expect(res).to.be.html;
  //     expect(res.text).to.contain('Soccer');
  //     done();
  //     });
  //   });

  //   // testing post route
  //   it('should post successfully', (done) => {
  //     const newItem = {data: "adding new item"};

  //     requester
  //     .post('/post')
  //     .send(newItem)
  //     .end(function (err, res) {
  //       expect(res).to.have.status(200);
  //       done();
  //     });
  //   });
  });

