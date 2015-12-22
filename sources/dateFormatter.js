var moment = require('moment');

/**
 *
 * @param date a javascript Date object
 * @param format a descriptive format as string like :
 *  - 'tiny'    expecting MM/DD/AAAA
 *  - 'simple'  expecting Month DD, AAAA
 *  - 'full'    expecting Day, Month DD, AAAA HH:mm (AM | PM)
 * @returns {string }
 */


module.exports = function formatDate(date, format){
	if (format === 'tiny')
		return moment(date).format('L');

	if (format === 'simple')
		return moment(date).format('ll');

	if (format === 'full')
		return moment(date).format('LLLL');
};