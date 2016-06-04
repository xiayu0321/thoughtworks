function calculate_median(arr) {
  //请勿改动函数名
  var i = 0;
  var len = 0;
  var newArr = [];
  for(i = 0;i < arr.length;i++){
  	if((i + 1) % 2 === 0){
  		newArr.push() = arr[i];   
  	}
  }  
  len = newArr.length;
  newArr.sort(function(a,b){
    return a>b?1:-1});

   var result = (len % 2 === 0 ?newArr[len / 2] + newArr[len / 2  - 1]: newArr[len / 2]);

   return result;
}

module.exports = calculate_median;
