var expect = require('expect.js');
var dateFormatter = require('../sources/dateFormatter.js');

describe('contains', function(){
	var date = new Date('1987-05-15T13:00:00Z');
	it('should return the correct value for a \'tiny\' format', function(){
		expect(dateFormatter(date, 'tiny')).to.equal('05/15/1987')
	});

	it('should return the correct value for a \'simple\' format', function(){
		expect(dateFormatter(date, 'simple')).to.equal('May 15, 1987')
	});

	it('should return the correct value for a \'full\' format', function(){
		expect(dateFormatter(date, 'full')).to.equal('Friday, May 15, 1987 3:00 PM')
	});
});