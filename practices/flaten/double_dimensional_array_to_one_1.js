'use strict';

function double_to_one(collection) {
	var i = 0;
	var j = 0;
	var newArr = [];

	for(i = 0;i < collection.length;i++){
		if(collection[i] instanceof Array){
			for(j = 0; j < (collection[i]).length;j++){
			newArr.push(collection[i][j]);
		  }
		}else{
			newArr.push(collection[i]);
	  }
 }
	return newArr;
}
module.exports = double_to_one;
