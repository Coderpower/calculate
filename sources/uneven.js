module.exports = function(array){
	var filteredItems = [];
	for(var i=0; i<array.length; i++)
		if (array[i] % 2 !== 0)
			filteredItems.push(array[i]);

	return filteredItems;
}
