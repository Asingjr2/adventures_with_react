var assert = require('assert');
var chaiAssert = require('chai').assert

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

/** 
 * Testing with chai assertions methods.
 * Optional message only shows if test fails. 
 */
var foo = 'bar'
var drinks = { tea: ['lipton', 'green', 'herbal'] }

chaiAssert.typeOf(foo, 'string');
chaiAssert.equal(foo, 'bar');
chaiAssert.lengthOf(drinks.tea, 3, 'there should be 3 types of tea');
