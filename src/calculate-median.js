function calculate_median(arr) {
  //请勿改动函数名
  var i = 0;
  var j = 0;
  var newArr = [];
  for(i = 0;i < arr.length;i++){
  	if((i + 1) % 2 === 0){
  	  j = newArr.push(arr[i]);   
  	}
  }  
  newArr.sort(function(a,b){
    return a - b});

   var result = (j % 2 === 0 ?(newArr[j / 2] + newArr[j / 2 -1])/2 : newArr[j / 2]);

   return result;
}

module.exports = calculate_median;
