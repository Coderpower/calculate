var moment = require('moment.js');

module.exports = function subtractOneMonth(date){
  return moment(date).subtract(1, 'month').format('l');
};