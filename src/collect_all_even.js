'use strict';

function collect_all_even(collection) {
  　var arr = [];
   var j = 0; 

  	for(var i = 0; i < collection.length;i++){
  		if(collection[i] % 2 === 0){
  			arr[j++] = collection[i];
  		}
  	}
  	return arr;
}

module.exports = collect_all_even;
