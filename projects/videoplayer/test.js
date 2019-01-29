/** Used for mocha base test. */
var assert = require('assert');
/** Used for chai server testing. */
const app = require('./src/index');
const chai = require('chai');
const chaiHttp = require('chai-http');

/** Confirm value of array returns false using base js validation. */
describe('Array', function() {

  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });

    it("should return -1 if word length does not equal 15", function() {

      const word = 'happy'
      assert.notEqual(15, word.length);
    });
  });
});


/** Chai testing. */
chai.use(chaiHttp);

describe('Checking all endpoints', () => {
  describe('Checking landing page', () => {
    it('Should return status code of 200', () => {
      return chai.request(app)
      .get('/')
      .catch(err => err.response)
      .then(res => {
        expect(res).to.have.status(200);
      });
    });
  });
});
