function calculate_median(arr) {
  //请勿改动函数名
  var i = 0;
  var j = 0;
  var len = 0;
  var max;
  var min;
  var newArr = [];
  for(i = 0;i < arr.length;i++){
  	if((i + 1) % 2 === 0){
  		newArr[j++] = arr[i];
  	}
  }  
  len = newArr.length;

  for (i = 1; i <= len / 2; i++) {
     min = 1;
     max = 1;
     for (j = j+1; j <= len - i; j++) {
       if(newArr[j] > newArr[max]){
          max = j;
       }
       if(newArr[j] < newArr[min]){
            min = j;
       }
     }
     var tmp = newArr[i - 1];
     newArr[i-1] = newArr[min];
     newArr[min] = tmp;  
    
     tmp = newArr[n-i]; 
     newArr[n-i] = newArr[max]; 
     newArr[max] = tmp;   
  }

   var result = len % 2 === 0 ?newArr[len / 2] + newArr[len / 2  + 1]:result = newArr[len / 2 + 1];

   return result;
}
module.exports = calculate_median;
