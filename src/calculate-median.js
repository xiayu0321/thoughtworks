function calculate_median(arr) {
  //请勿改动函数名
  var i = 0;
  var j = 0;
  var newArr = [];
  for(i = 0;i < arr.length;i++){
  	if((i + 1) % 2 === 0){
  	    newArr[j++] = arr[i];   
  	}
  }  
  newArr.sort(function(a,b){
    return a>b?1:-1});

   var result = ((j - 1)% 2 === 0 ?newArr[j / 2] + newArr[j / 2  - 1]: newArr[j / 2]);

   return result;
}

module.exports = calculate_median;
