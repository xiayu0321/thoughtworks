'use strict';

function double_to_one(collection) {
	var i = 0;
	var j = 0;
　var k;
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

 	for(i = 0; i < newArr.length;i++){
   		for(j = i + 1; j < newArr.length;j++){
   			if(newArr[i] === newArr[j]){
   				for(k = j;k < newArr.length;k++){
   					newArr[k] = newArr[k+1];
   					--j;
   					--newArr.length;
   				}
   			}
   		}
 	}
	return newArr;
}

module.exports = double_to_one;

