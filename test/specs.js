var expect = require('expect.js');
var moment = sinon.spy(Moment);
var result = require('../sources/substractOneMonth');

var START_DATE = '2014/12/31';
var SUBTRACTED_DATE = '30/11/2014';

var Moment = sinon.spy(function(){
  if (this == global)
    return new Moment();
  this._date = START_DATE;
});

Moment.prototype.subtract = sinon.spy(function(value, unit){
  this._date = SUBTRACTED_DATE;
  return this;
});

Moment.prototype.format = sinon.spy(function(){
  return this._date;
});

describe('1/7', function(){
  it('You must call moment', function(){
    expect(moment.called).to.be.true;
  });
});

describe('2/7', function(){
  it('You must call  moment with the given date', function() {
    expect(moment.calledWithExactly(START_DATE)).to.be.true;
  });
});

describe('3/7', function(){
  it('You must call the subtract method', function() {
    expect(Moment.prototype.subtract.called).to.be.true;
  });
});

describe('4/7', function(){
  it('You must subtract 1 month', function() {
    var subtractedOneMonth = Moment.prototype.subtract.calledWithExactly(1, 'month');
    var subtractedOneMonths = Moment.prototype.subtract.calledWithExactly(1, 'months');
    var subtractedOneMonthObject = Moment.prototype.subtract.calledWithMatch(sinon.match({month: 1}));
    var subtractedOneMonthsObject = Moment.prototype.subtract.calledWithMatch(sinon.match({months: 1}));

    var properlySubtractedOneMonth = subtractedOneMonth || subtractedOneMonths || subtractedOneMonthObject || subtractedOneMonthsObject;
    expect(properlySubtractedOneMonth).to.be.true;
  });
});

describe('5/7', function(){
  it('You must call format', function() {
    expect(Moment.prototype.format.called).to.be.true;
  });
});

describe('6/7', function(){
  it('You must call format with \'l\'', function() {
    expect(Moment.prototype.format.calledWithExactly('l')).to.be.true;
  });
});

describe('7/7', function(){
  it('You must return \'30/11/2014\'', function() {
    expect(result).to.equal(SUBTRACTED_DATE);
  });
});