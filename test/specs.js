var expect = require('expect.js');
var reverse = require('../sources/reverse');
var uneven = require('../sources/uneven');

describe('uneven', function(){
	it('should return only uneven numbers', function(){
		var array = [1, 2, 3, 4, 5, 6];
		expect(uneven(array)).to.eql([1, 3, 5]);
	});
});

describe('sort', function(){
	it('should return only unveven numbers', function(){
		var array = [1, 2, 3, 4, 5, 6];
		expect(reverse(array)).to.eql([6, 5, 4, 3, 2, 1]);
	});
});