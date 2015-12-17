var S = require('string');

module.exports = function contains(text, word){
	return S(text).contains(word);
}