function collect_same_elements(collection_a, collection_b) {
	var i = 0;
	var j = 0;
	var newArr = [];

	for(i = 0;i < collection_a.length;i++){
		for(j = 0; j < collection_b.length;j++){
			if(collection_a[i] === collection_b[j]){
				newArr.push(collection_a[i]);
			}
		}
	}	
	return newArr;
}

module.exports = collect_same_elements;
