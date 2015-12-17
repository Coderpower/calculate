var expect = require('expect.js');
var contains = require('../sources/contains');
var ends = require('../sources/ends');
var starts = require('../sources/starts');

describe('contains', function(){
	it('should validate text that contains word or not', function(){
		expect(contains('Hello Coderpower', 'Coderpower')).to.be.ok();
		expect(contains('Hello Coderpower', 'Foo Bar')).to.not.be.ok();
	});
});

describe('starts', function(){
	it('should validate text that starts with word or not', function(){
		expect(starts('Hello Coderpower', 'Hello')).to.be.ok();
		expect(starts('Hello Coderpower', 'Foo Bar')).to.not.be.ok();
	});
});

describe('ends', function(){
	it('should validate text that ends with word or not', function(){
		expect(ends('Hello Coderpower', 'Coderpower')).to.be.ok();
		expect(ends('Hello Coderpower', 'Foo Bar')).to.not.be.ok();
	});
});