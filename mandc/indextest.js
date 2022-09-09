var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#doSomething', function() {
it('should concatenate the two parameters', function() {
    var x = doSomething('Hello', ' Everyone');
    expect(x).to.equal('Hello Everyone');
});
it('should throw an error if first parameter is not a string', function() {
    expect(function() {
        doSomething(5, 5);
    }).to.throw(Error);
});   
});   
});